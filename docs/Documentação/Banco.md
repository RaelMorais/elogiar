---
sidebar_position: 2
---

# Banco de dados 

## Documentação Técnica — Modelo de Banco de Dados 

## Tecnologias Utilizadas

**SQLite:** Sistema de Gerenciamento de Banco de Dados (SGBD) relacional leve e integrado ao Django, ideal para aplicações de pequeno a médio porte.

**Django (Python):** Framework web de alto nível que utiliza o ORM (Object-Relational Mapping) para abstração da camada de dados.

**Python:** Linguagem de programação utilizada para o desenvolvimento da aplicação e integração com o banco de dados via Django.

# Estrutura do banco 

O modelo de dados foi estruturado com foco em um sistema de votação, onde usuários podem votar em outros usuários dentro de categorias específicas, com a opção de incluir uma mensagem.


## Entidades de relacionamento. 

# Categoria 

Armazena os tipos de premiações ou categorias disponíveis para votação ````(ex: "Melhor Colaborador", "Inovação do Ano")````.

Tabela: ````Categoria````

Atributos:

**id (int, PK):** Identificador único (gerado automaticamente).

**nome (varchar):** Nome da categoria (máx. 50 caracteres).

`````python
class Categoria(models.Model):
    nome = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nome
`````

# Usuarios 

Representa os participantes do sistema que podem votar e ser votados.

Tabela: ````Usuario````

Atributos:

**id (int, PK):** Identificador único (gerado automaticamente).

**nome (varchar):** Nome do usuário (máx. 100 caracteres)..

````python
class Usuarios(models.Model):
    nome = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nome
````

# Votos 

Armazena os registros de votos realizados entre usuários, relacionando quem votou em quem, em qual categoria, e com qual mensagem.

Tabela: ````Votos````

Atributos:

**id (int, PK):** Identificador único (gerado automaticamente).

**pessoa_votando (FK):** Referência ao usuário que está votando.

**pessoa_votadas (FK):** Referência ao usuário que está recebendo o voto.

**categoria_votadas (FK):** Referência à categoria da votação.

**mensagem (text):** Mensagem opcional anexada ao voto.

>> Restrições: Restrição de unicidade ````(unique_together)````: Garante que um mesmo usuário não vote mais de uma vez na mesma pessoa dentro da mesma categoria.

``````Python
class Votos(models.Model):
    pessoa_votando = models.ForeignKey(Usuarios, on_delete=models.CASCADE)
    pessoa_votadas = models.ForeignKey(Usuarios, on_delete=models.CASCADE, related_name='votos_recebidos')
    categoria_votadas = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    mensagem = models.TextField()

    class Meta:
        unique_together = ('pessoa_votando', 'pessoa_votadas', 'categoria_votadas')

    def __str__(self):
        return f"{self.pessoa_votando} votou em {self.pessoa_votadas} na categoria {self.categoria_votadas}"
``````

![Relacionamento](/img/relacionamento_elogiar_banco.png)

## **Diagrama de Entidade e Relacionamento**

**Modelo Conceitual** 

![Conceitual](/img/conceitual.jpg)


**Modelo Lógico** 

![Lógico](/img/logico.png)

