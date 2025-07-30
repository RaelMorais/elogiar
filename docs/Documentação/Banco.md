---

sidebar_position: 2

---

# Banco de Dados

## Documentação Técnica — Modelo de Banco de Dados 📑

## Tecnologias Utilizadas 🛠️

- **SQLite** 🗃️: Sistema de Gerenciamento de Banco de Dados (SGBD) relacional leve e integrado ao Django, ideal para aplicações de pequeno a médio porte, como o eLOGiar.
- **Django (Python)** 🐍: Framework web de alto nível que utiliza o ORM (Object-Relational Mapping) para abstração da camada de dados, simplificando a interação com o banco.
- **Python** 💻: Linguagem de programação utilizada para o desenvolvimento da aplicação e integração com o banco de dados via Django.

## Estrutura do Banco 📊

O modelo de dados foi projetado para suportar o sistema de votação do **eLOGiar**, permitindo que colaboradores da área de logística votem em outros indivíduos ou equipes nas categorias **InovaLOG** 💡, **FaciLOG** 🤝, e **MaxiLOG** ⚙️, com a opção de incluir uma mensagem personalizada ✍️. A estrutura suporta votos individuais e coletivos, com restrições para evitar duplicidades e garantir a integridade dos dados.

## Entidades de Relacionamento 🔗

### Categoria 🏷️

Armazena as categorias disponíveis para votação, como *InovaLOG*, *FaciLOG* e *MaxiLOG*.

**Tabela:** `Categoria`

**Atributos:**

- **id (int, PK)** 🔢: Identificador único (gerado automaticamente).
- **nome (varchar)** 📛: Nome da categoria (máx. 50 caracteres, ex.: "InovaLOG", "FaciLOG", "MaxiLOG"). Restrição de unicidade aplicada.

```python
class Categoria(models.Model):
    nome = models.CharField(max_length=50, unique=True)
    
    def __str__(self):
        return self.nome
```

### Gestor 👑

Representa os gestores da área de logística responsáveis pelos departamentos.

**Tabela:** `Gestor`

**Atributos:**

- **id (int, PK)** 🔢: Identificador único (gerado automaticamente).
- **nome (varchar)** 📛: Nome completo do gestor (máx. 255 caracteres).
- **edv (varchar)** 🆔: Identificador único do gestor (máx. 100 caracteres).
- **email (email)** 📧: E-mail único do gestor.
- **user_rede (varchar)** 💻: Nome de usuário da rede (máx. 100 caracteres).

```python
class Gestor(models.Model):
    nome = models.CharField(max_length=255)
    edv = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    user_rede = models.CharField(max_length=100)

    def __str__(self):
        return self.nome
```

### Setor 🏭

Representa os departamentos dentro da área de logística da Bosch Campinas.

**Tabela:** `Setor`

**Atributos:**

- **id (int, PK)** 🔢: Identificador único (gerado automaticamente).
- **departamento (varchar)** 📋: Nome do departamento (máx. 100 caracteres).
- **gestor (FK)** 👑: Referência ao gestor responsável pelo departamento.

```python
class Setor(models.Model):
    departamento = models.CharField(max_length=100)
    gestor = models.ForeignKey(Gestor, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.departamento
```

### Usuários 👤

Representa os colaboradores da logística que podem votar ou ser votados.

**Tabela:** `Usuario`

**Atributos:**

- **id (int, PK)** 🔢: Identificador único (gerado automaticamente).
- **nome (varchar)** 📛: Nome completo do usuário (máx. 100 caracteres).
- **edv (varchar)** 🆔: Identificador único do funcionário (máx. 20 caracteres, único, opcional).
- **email (email)** 📧: E-mail único do usuário (opcional).
- **setor (FK)** 🏭: Referência ao departamento do usuário.

```python
class Usuarios(models.Model):
    nome = models.CharField(max_length=100)
    edv = models.CharField(max_length=20, unique=True, blank=True, default='')
    email = models.EmailField(max_length=100, unique=True, blank=True, default='')
    setor = models.ForeignKey(Setor, on_delete=models.CASCADE, default='')
    
    def __str__(self):
        return self.nome
```

### EquipeVotante 👥

Representa equipes criadas para realizar votos coletivos.

**Tabela:** `EquipeVotante`

**Atributos:**

- **id (int, PK)** 🔢: Identificador único (gerado automaticamente).
- **nome (varchar)** 📛: Nome da equipe (máx. 100 caracteres).
- **categoria (FK)** 🏷️: Referência à categoria do voto (ex.: InovaLOG, FaciLOG, MaxiLOG).
- **membros (M2M)** 👤: Relação muitos-para-muitos com os usuários membros da equipe.
- **criado_em (datetime)** ⏰: Data e hora de criação da equipe (gerado automaticamente).

```python
class EquipeVotante(models.Model):
    nome = models.CharField(max_length=100)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    membros = models.ManyToManyField(Usuarios)
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Equipe {self.nome} ({self.categoria})"
```

### Votos 🗳️

Armazena os registros de votos, sejam individuais ou por equipe, relacionando quem votou, quem foi votado, a categoria e a mensagem associada.

**Tabela:** `Votos`

**Atributos:**

- **id (int, PK)** 🔢: Identificador único (gerado automaticamente).
- **tipo_voto (varchar)** 🗳️: Tipo de voto ("solo" ou "equipe", padrão: "solo").
- **pessoa_votando (FK)** 👤: Referência ao usuário que votou (nulo para votos de equipe).
- **equipe_votante (FK)** 👥: Referência à equipe votante (nulo para votos individuais).
- **pessoa_votadas (FK)** 👤: Referência ao usuário ou membro da equipe votado.
- **categoria_votadas (FK)** 🏷️: Referência à categoria do voto.
- **mensagem (text)** 💬: Mensagem opcional anexada ao voto.

**Restrições:**

- **unique_voto_solo**: Garante que um usuário não vote mais de uma vez na mesma pessoa na mesma categoria para votos individuais.
- **unique_voto_equipe**: Garante que uma equipe não vote mais de uma vez na mesma pessoa na mesma categoria.
- **unique_voto_pessoa_equipe_categoria**: Impede que um usuário vote duplicadamente na mesma pessoa dentro de uma equipe e categoria.

```python
class Votos(models.Model):
    VOTO_TIPO = (
        ('solo', 'Solo'),
        ('equipe', 'Equipe'),
    )
    tipo_voto = models.CharField(max_length=10, choices=VOTO_TIPO, default='solo')
    pessoa_votando = models.ForeignKey(
        Usuarios, on_delete=models.CASCADE, null=True, blank=True
    )
    equipe_votante = models.ForeignKey(
        EquipeVotante, on_delete=models.CASCADE, null=True, blank=True
    )
    pessoa_votadas = models.ForeignKey(
        Usuarios, on_delete=models.CASCADE, related_name='votos_recebidos'
    )
    categoria_votadas = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    mensagem = models.TextField()

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['pessoa_votando', 'pessoa_votadas', 'categoria_votadas'],
                condition=models.Q(tipo_voto='solo'),
                name='unique_voto_solo'
            ),
            models.UniqueConstraint(
                fields=['equipe_votante', 'pessoa_votadas', 'categoria_votadas'],
                condition=models.Q(tipo_voto='equipe'),
                name='unique_voto_equipe'
            ),
            models.UniqueConstraint(
                fields=['pessoa_votando', 'equipe_votante', 'pessoa_votadas', 'categoria_votadas'],
                condition=models.Q(tipo_voto='equipe'),
                name='unique_voto_pessoa_equipe_categoria'
            ),
        ]

    def __str__(self):
        if self.tipo_voto == 'solo':
            return f"{self.pessoa_votando} votou em {self.pessoa_votadas} ({self.categoria_votadas})"
        else:
            return f"Equipe {self.equipe_votante} votou em {self.pessoa_votadas} ({self.categoria_votadas})"
```

![Relacionamento](/img/relacionamento_elogiar_banco.png)

## Diagrama de Entidade e Relacionamento 📈

### Modelo Conceitual 🧠

![Conceitual](/img/conceitual.jpg)

### Modelo Lógico 🖥️

![Lógico](/img/logico.png)