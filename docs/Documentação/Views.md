---

sidebar_position: 3

---

# Views 

## Documentação Técnica — Views 📑

As views descritas a seguir compõem a camada de apresentação da aplicação **eLOGiar** e estão implementadas no módulo `views.py`. Elas fazem a mediação entre os modelos de dados e os templates HTML, tratando requisições **HTTP** e gerenciando as regras de negócio da interface para suportar o sistema de votação, incluindo votos individuais e por equipe nas categorias **InovaLOG** 💡, **FaciLOG** 🤝, e **MaxiLOG** ⚙️.

### listar_categorias(request) 🏷️

**Objetivo:** Recupera e exibe todas as categorias disponíveis para votação (ex.: InovaLOG, FaciLOG, MaxiLOG).

**Requisição:** GET

**Contexto renderizado:**

- `categorias`: QuerySet contendo todas as instâncias do modelo `Categoria`.

**Template:** `listar_categorias.html`

**Dependências:** 
- `Categoria.objects.all()`

```python
def listar_categorias(request):
    categorias = Categoria.objects.all()
    return render(request, 'listar_categorias.html', {
        'categorias': categorias,
    })
```

### indicar_usuario(request, categoria_id) 🗳️

**Objetivo:** Permite que um usuário vote em outro colaborador dentro de uma categoria específica, validando regras de negócio antes de registrar o voto em `Votos`.

**Requisição:** 
- GET: Exibe o formulário de votação.
- POST: Processa o envio do voto.

**Regras de Validação:**

- Impede que um usuário vote em si mesmo (`votante_id == votado_id`).
- Rejeita votos duplicados (mesmo votante, votado e categoria) usando `Votos.objects.filter(...)`.
- Verifica a existência do votante e do votado pelo EDV.

**Operações:**

- Cria um novo registro em `Votos`.
- Envia um webhook com os detalhes do voto (votante, votado, categoria, mensagem).

**Contexto:**

- `categoria`: Instância da categoria selecionada (`get_object_or_404`).
- `usuarios`: QuerySet de todos os usuários disponíveis, ordenados por nome.

**Templates:**

- `indicar_usuario.html`: Formulário de votação.
- `indicacao_invalida.html`: Exibido em caso de autoindicação.
- `erro_indicacao.html`: Exibido para erros como EDV inválido ou voto duplicado.

**Redirecionamento:** `listar_indicacoes_realizadas` (após voto bem-sucedido).

**Dependências:**

- `Categoria`, `Usuarios`, `Votos`
- Biblioteca externa: `requests` (para envio de webhook)

```python
def indicar_usuario(request, categoria_id):
    categoria = get_object_or_404(Categoria, id=categoria_id)
    usuarios = Usuarios.objects.all().order_by('nome')
    if request.method == 'POST':
        edv_votante = request.POST['edv_votante']
        votado_id = request.POST['votado']
        mensagem = request.POST['mensagem']
        try:
            votante = Usuarios.objects.get(edv=edv_votante)
        except Usuarios.DoesNotExist:
            return render(request, 'erro_indicacao.html', {
                'mensagem': 'EDV não encontrado. Verifique e tente novamente.'
            })
        try:
            votado = Usuarios.objects.get(id=votado_id)
        except Usuarios.DoesNotExist:
            return render(request, 'erro_indicacao.html', {
                'mensagem': 'Pessoa votada não encontrada. Verifique e tente novamente.'
            })
        if votante.id == votado.id:
            return render(request, 'indicacao_invalida.html', {
                'mensagem': 'Você não pode votar em si mesmo!'
            })
        if Votos.objects.filter(pessoa_votando=votante, pessoa_votadas=votado, categoria_votadas=categoria).exists():
            return render(request, 'erro_indicacao.html', {
                'mensagem': 'Você já votou nesta pessoa na mesma categoria.'
            })
        voto = {
            'votante': votante.nome,
            'votante_edv': votante.edv,
            'votante_email': votante.email,
            'votado': votado.nome,
            'votado_email': votado.email,
            'votado_edv': votado.edv,
            'categoria': categoria.nome,
            'mensagem': mensagem,
            'tipo_voto': 'solo'
        }
        try:
            response = requests.post(webhook_url, json=voto)
            response.raise_for_status()
        except requests.exceptions.RequestException as e:
            print(f"Erro ao enviar o Webhook: {e}")
        return redirect('listar_indicacoes_realizadas')
    return render(request, 'indicar_usuario.html', {
        'categoria': categoria,
        'usuarios': usuarios,
    })
```

### indicar_usuario_em_equipe(request, categoria_id) 👥

**Objetivo:** Permite que um usuário registre um voto coletivo para uma equipe em uma categoria específica, validando regras de negócio.

**Requisição:**
- GET: Exibe o formulário para votação em equipe.
- POST: Processa o envio do voto em equipe.

**Regras de Validação:**

- Verifica se todos os campos (EDV do votante, nome da equipe, quantidade de membros, IDs dos membros, mensagem) estão preenchidos.
- Valida se a quantidade de membros selecionados corresponde ao número informado.
- Impede votos duplicados (mesmo votante, equipe, pessoa votada e categoria).
- Verifica a existência do votante pelo EDV.

**Operações:**

- Cria ou atualiza uma instância de `EquipeVotante` com os membros selecionados.
- Registra votos individuais em `Votos` para cada membro da equipe com `tipo_voto='equipe'`.

**Contexto:**

- `categoria`: Instância da categoria selecionada (`get_object_or_404`).
- `usuarios`: QuerySet de todos os usuários disponíveis.

**Templates:**

- `indicar_usuario_em_equipe.html`: Formulário de votação em equipe.
- Retorna `HttpResponseBadRequest` para erros de validação.

**Redirecionamento:** `/eLOGiar` (após voto bem-sucedido).

**Dependências:**

- `Categoria`, `Usuarios`, `EquipeVotante`, `Votos`

```python
def indicar_usuario_em_equipe(request, categoria_id):
    categoria = get_object_or_404(Categoria, pk=categoria_id)
    usuarios = Usuarios.objects.all()
    if request.method == 'POST':
        edv_votante = request.POST.get('edv_votante')
        nome_equipe = request.POST.get('nome_equipe')
        qtd_membros = request.POST.get('qtd_membros')
        membros_ids = request.POST.getlist('membros')
        mensagem = request.POST.get('mensagem')
        if not (edv_votante and nome_equipe and qtd_membros and membros_ids and mensagem):
            return HttpResponseBadRequest("Preencha todos os campos.")
        try:
            qtd_membros = int(qtd_membros)
        except ValueError:
            return HttpResponseBadRequest("Quantidade de membros inválida.")
        if len(membros_ids) != qtd_membros:
            return HttpResponseBadRequest("Quantidade de membros selecionados não corresponde à quantidade informada.")
        votante = get_object_or_404(Usuarios, edv=edv_votante)
        equipe, created = EquipeVotante.objects.get_or_create(
            nome=nome_equipe,
            categoria=categoria
        )
        equipe.membros.clear()
        for id_membro in membros_ids:
            membro = get_object_or_404(Usuarios, pk=id_membro)
            equipe.membros.add(membro)
        for membro in equipe.membros.all():
            voto_existe = Votos.objects.filter(
                pessoa_votando=votante,
                equipe_votante=equipe,
                pessoa_votadas=membro,
                categoria_votadas=categoria,
                tipo_voto='equipe'
            ).exists()
            if voto_existe:
                return HttpResponseBadRequest(
                    f"Você já votou em {membro.nome} para a equipe {equipe.nome} nesta categoria."
                )
            Votos.objects.create(
                tipo_voto='equipe',
                pessoa_votando=votante,
                equipe_votante=equipe,
                pessoa_votadas=membro,
                categoria_votadas=categoria,
                mensagem=mensagem
            )
        return redirect('/eLOGiar')
    return render(request, 'indicar_usuario_em_equipe.html', {
        'categoria': categoria,
        'usuarios': usuarios,
    })
```

### listar_indicacoes_realizadas(request) 📜

**Objetivo:** Exibe todos os votos registrados no sistema, incluindo votos individuais e por equipe.

**Requisição:** GET

**Contexto renderizado:**

- `indicacoes`: QuerySet de todas as instâncias de `Votos`.

**Template:** `listar.html`

**Dependências:**

- `Votos.objects.all()`

```python
def listar_indicacoes_realizadas(request):
    indicacoes = Votos.objects.all()
    return render(request, 'listar.html', {
        'indicacoes': indicacoes,
    })
```

### index(request) 🏠

**Objetivo:** Renderiza a página inicial da aplicação eLOGiar, servindo como ponto de entrada.

**Requisição:** GET

**Template:** `index.html`

```python
def index(request): 
    return render(request, 'index.html')
```

### carregamento(request) ⏳

**Objetivo:** Renderiza uma tela de transição ou carregamento durante operações demoradas.

**Requisição:** GET

**Template:** `carregamento.html`

```python
def carregamento(request):
    return render(request, 'carregamento.html')
```

### votos_page(request) 🗳️

**Objetivo:** Renderiza a interface principal do módulo de votação.

**Requisição:** GET

**Template:** `votos.html`

```python
def votos_page(request):
    return render(request, 'votos.html')
```

### login_page(request) 🔐

**Objetivo:** Renderiza a tela de login para autenticação de usuários e administradores.

**Requisição:** GET

**Template:** `login.html`

```python
def login_page(request):
    return render(request, 'login.html')
```

### delete_page(request) 🗑️

**Objetivo:** Renderiza a interface para confirmação de exclusão de votos (acessível apenas por administradores).

**Requisição:** GET

**Template:** `delete.html`

```python
def delete_page(request):
    return render(request, 'delete.html')
```

### resetar_votos(request) 🧹

**Objetivo:** Exclui todos os registros de votos no sistema, restrito a administradores autenticados.

**Requisição:** GET

**Proteção:** Requer autenticação de staff (`@staff_member_required`).

**Operações:**

- Exclui todos os registros de `Votos` usando `Votos.objects.all().delete()`.

**Redirecionamento:** `delete` (após exclusão).

**Dependências:**

- `Votos`

```python
@staff_member_required 
def resetar_votos(request):
    Votos.objects.all().delete()
    return redirect('delete')
```

### buscar_usuarios(request) 🔍

**Objetivo:** Realiza busca dinâmica de usuários por EDV, retornando resultados em formato JSON para uso em interfaces interativas.

**Requisição:** GET

**Parâmetros:**

- `edv`: Filtra usuários cujo EDV contém o valor fornecido (case-insensitive).

**Resposta:**

- JSON com lista de usuários encontrados, contendo `id`, `nome`, e `edv`.
- Retorna lista vazia se nenhum usuário for encontrado.

**Dependências:**

- `Usuarios.objects.filter(edv__icontains=edv)`

```python
def buscar_usuarios(request):
    if 'edv' in request.GET:
        edv = request.GET['edv']
        usuarios = Usuarios.objects.filter(edv__icontains=edv)
        resultado = [{"id": usuario.id, "nome": usuario.nome, "edv": usuario.edv} for usuario in usuarios]
        return JsonResponse({"usuarios": resultado})
    return JsonResponse({"usuarios": []})
```

### exportar_votos_para_excel(request) 📊

**Objetivo:** Gera e exporta um relatório em formato `.xlsx` contendo informações detalhadas sobre os votos, incluindo resumo por usuário, mensagens detalhadas, e votos por equipe.

**Requisição:** GET

**Proteção:** Requer autenticação (`@permission_classes([IsAuthenticated])`).

**Processo:**

- Recupera todos os usuários, categorias, votos, e equipes.
- Gera três planilhas no arquivo Excel usando `openpyxl`:
  - **Resumo de Votos**: Total de votos por usuário e por categoria.
  - **Mensagens dos Votos**: Detalhes de cada voto (votante, votado, categoria, mensagem, etc.).
  - **Votos por Equipe**: Detalhes de votos coletivos (equipe, votante, votado, categoria, mensagem).

**Resposta:** Arquivo `.xlsx` com `Content-Disposition: attachment`.

**Dependências:**

- `Usuarios`, `Categoria`, `Votos`, `EquipeVotante`
- Biblioteca externa: `openpyxl`

```python
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def exportar_votos_para_excel(request):
    usuarios = Usuarios.objects.all().order_by('nome')  
    categorias = Categoria.objects.all()
    votos = Votos.objects.select_related('pessoa_votadas', 'categoria_votadas', 'pessoa_votando').all().order_by('pessoa_votadas__nome')
    equipes = EquipeVotante.objects.prefetch_related('membros').select_related('categoria').all()
    wb = Workbook()
    ws_resumo = wb.active
    ws_resumo.title = "Resumo de Votos"
    header = ['Nome do Usuário', 'EDV', 'Setor', 'Gestor'] + [categoria.nome for categoria in categorias]
    ws_resumo.append(header)
    for usuario in usuarios:
        total_votos = Votos.objects.filter(pessoa_votadas=usuario).count()
        row = [
            usuario.nome,  
            usuario.edv,
            usuario.setor.departamento if usuario.setor else 'Sem Setor',
            usuario.setor.gestor.nome if usuario.setor and usuario.setor.gestor else 'Sem Gestor',
            total_votos
        ]
        for categoria in categorias:
            count = Votos.objects.filter(pessoa_votadas=usuario, categoria_votadas=categoria).count()
            row.append(count)
        ws_resumo.append(row)
    ws_detalhes = wb.create_sheet(title="Mensagens dos Votos")
    ws_detalhes.append([
        'Votante', 'EDV Votante', 'Email do Votante', 'Setor do Votante', 'Gestor do Votante', 'Email Gestor do Votante',
        'Votado', 'EDV Votado', 'Email do Votado', 'Setor do Votado', 'Gestor Votado', 'Email do Gestor do Votado', 
        'Categoria', 'Mensagem'
    ]) 
    for voto in votos:
        ws_detalhes.append([
            voto.pessoa_votando.nome,
            voto.pessoa_votando.edv,
            voto.pessoa_votando.email if voto.pessoa_votando.email else 'Sem email',
            voto.pessoa_votando.setor.departamento if voto.pessoa_votando.setor else 'Sem Setor',
            voto.pessoa_votando.setor.gestor.nome,
            voto.pessoa_votando.setor.gestor.email,
            voto.pessoa_votadas.nome, 
            voto.pessoa_votadas.edv,
            voto.pessoa_votadas.email,  
            voto.pessoa_votadas.setor.departamento if voto.pessoa_votadas.setor else 'Sem Setor',
            voto.pessoa_votadas.setor.gestor.nome if voto.pessoa_votadas.setor and voto.pessoa_votadas.setor.gestor else 'Sem Gestor',
            voto.pessoa_votadas.setor.gestor.email, 
            voto.categoria_votadas.nome,
            voto.mensagem,
        ])
    ws_equipes = wb.create_sheet(title="Votos por Equipe")
    ws_equipes.append([
        'Pessoa que votou',
        'EDV do votante',
        'Equipe votante',
        'Categoria',
        'Pessoa votada',
        'Mensagem'
    ])
    votos_equipe = Votos.objects.filter(tipo_voto='equipe').select_related(
        'pessoa_votando', 'equipe_votante', 'categoria_votadas', 'pessoa_votadas'
    )
    for voto in votos_equipe:
        ws_equipes.append([
            voto.pessoa_votando.nome if voto.pessoa_votando else 'Desconhecido',
            voto.pessoa_votando.edv if voto.pessoa_votando else 'Desconhecido',
            voto.equipe_votante.nome if voto.equipe_votante else 'Sem equipe',
            voto.categoria_votadas.nome,
            voto.pessoa_votadas.nome,
            voto.mensagem
        ])
    response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    response['Content-Disposition'] = 'attachment; filename="votosElogiar.xlsx"'
    wb.save(response)
    return response
```