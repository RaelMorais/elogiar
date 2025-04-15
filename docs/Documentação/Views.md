---
sidebar_position: 3
---

# Views

## Documentação Técnica — Views

As views descritas a seguir compõem a camada de apresentação da aplicação e estão implementadas no módulo ````views.py````. Elas fazem a mediação entre o modelo de dados e os templates HTML, tratando requisições **HTTP** e gerenciando as regras de negócio da interface.

# listar_categorias(request)

**Objetivo:** Recupera e exibe todas as instâncias do modelo Categoria disponíveis para votação.

**Requisição:** GET

**Contexto renderizado:**

```categorias:``` QuerySet contendo todas as categorias do banco de dados.

```Template:``` listar_categorias.html

```Dependências:``` Categoria.objects.all()


# indicar_usuario(request, categoria_id)

**Objetivo:** Permite que um usuário vote em outro dentro de uma categoria específica, validando regras de negócio antes de persistir a instância de Votos.

**Requisição:** GET (formulário) / POST (envio de voto)

# Regras de Validação:

- Um usuário não pode votar em si mesmo (votante_id == votado_id)

- Um voto duplicado (mesmo votante, votado e categoria) é rejeitado (validação com Votos.objects.filter(...))

**Operações:**

- Criação de um novo registro em Votos

**Contexto:**

```categoria:``` Instância da categoria selecionada (get_object_or_404)

```usuarios:``` Todos os usuários disponíveis para votação

**Templates:**

```indicar_usuario.html (formulário)```

```indicacao_invalida.html (autoindicação)```

```erro_indicacao.html (voto duplicado)```

**Redirecionamento:** listar_indicacoes_realizadas (após sucesso)

**Dependências:** Categoria, Usuarios, Votos



# listar_indicacoes_realizadas(request)

**Objetivo:** Exibe todas as indicações/votos já realizados e armazenados no banco de dados.

**Requisição:** GET

**Contexto renderizado:**

```indicacoes:``` QuerySet de todos os votos existentes (Votos.objects.all())

```Template:``` listar.html



# index(request)

**Objetivo:** Renderiza a página inicial da aplicação.

**Template:** index.html

**Requisição:** GET

>> Observação: Geralmente utilizada como ponto de entrada principal da aplicação web.

# carregamento(request)

**Objetivo:** Renderiza uma tela de transição ou carregamento.

**Template:** carregamento.html

**Requisição:** GET


votos_page(request)

**Objetivo:** Renderiza a interface principal do módulo de votos.

**Template:** votos.html

**Requisição:** GET


# login_page(request)

**Objetivo:** Renderiza o template da tela de login (interface de autenticação).

**Template:** login.html

**Requisição:** GET


# exportar_votos_para_excel(request)

Objetivo: Gera e exporta um relatório em formato .xlsx contendo o número de votos recebidos por cada usuário, separados por categoria.

Método HTTP: GET

Proteção: Requer autenticação (@permission_classes([IsAuthenticated]))

**Processo:**

- Recupera todos os usuários e categorias.

- Itera por cada usuário e conta os votos recebidos por categoria usando Votos.objects.filter(...).count().

- Utiliza a biblioteca openpyxl para gerar dinamicamente um arquivo Excel.

- Retorna o arquivo como HttpResponse com Content-Disposition: attachment.

**Resposta:** Arquivo .xlsx com a planilha de votação.

**Dependências:**

- Usuarios, Categoria, Votos

- **Biblioteca externa:** openpyxl

