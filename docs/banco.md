## Modelo de Banco de Dados

O banco de dados foi desenvolvido utilizando o **SQLite** como **SGBD** integrado ao framework **Django** em **Python**. A seguir, descrevemos a estrutura lógica e conceitual do modelo. Ele é composto por três **entidades principais**:


## **Categoria** 🎯

A tabela **Categoria** armazena informações sobre as categorias de votação, como o nome da categoria.

- **Atributos**:
  - `id_categoria`: Identificador único para cada categoria (Chave Primária).
  - `nome_categoria`: Nome da categoria, como "Melhor Colaborador", "Melhor Inovação", etc.


## **Usuário** 👤

A tabela **Usuário** armazena informações sobre os usuários que podem votar, como o nome do usuário.

- **Atributos**:
  - `id_usuario`: Identificador único para cada usuário (Chave Primária).
  - `nome_usuario`: Nome do usuário que participa da votação.

## **Votos** 🗳️

A tabela **Votos** armazena os votos em si, incluindo a mensagem votada, a categoria e o usuário associados ao voto.

- **Atributos**:
  - `id_voto`: Identificador único para cada voto (Chave Primária).
  - `mensagem_voto`: Mensagem opcional que o usuário pode incluir ao votar.
  - `id_categoria`: Relacionamento com a tabela **Categoria** (Chave Estrangeira).
  - `id_usuario`: Relacionamento com a tabela **Usuário** (Chave Estrangeira).

🔗 **Relacionamentos**:

- **Categoria - Votos**:
  - Um relacionamento de **um para muitos**, onde **uma categoria** pode ter múltiplos votos associados a ela.
  
- **Usuário - Votos**:
  - Um relacionamento de **um para muitos**, onde **um usuário** pode realizar múltiplos votos.

## **Chaves**:

- **Chaves Primárias**:
  - `id_categoria`, `id_usuario` e `id_voto` são as chaves primárias que identificam exclusivamente cada registro nas respectivas tabelas.
  
- **Chaves Estrangeiras**:
  - `id_categoria` e `id_usuario` na tabela **Votos** estabelecem os relacionamentos com as tabelas **Categoria** e **Usuário**, respectivamente.

## **Tecnologias**:

- **SQLite** 📊: Banco de dados relacional leve utilizado para armazenar os dados de forma eficiente.
- **Django** 🐍: Framework web de alto nível para desenvolvimento rápido de aplicações Python.
- **Python** 🧑‍💻: Linguagem de programação que alimenta o framework Django e a lógica por trás da aplicação.

## **Exemplo de Estrutura SQLite Django**:

```python
from django.db import models

class Categoria(models.Model):
    nome_categoria = models.CharField(max_length=255)  
    
    def __str__(self):
        return self.nome_categoria

class Usuario(models.Model):
    nome_usuario = models.CharField(max_length=255) 
    
    def __str__(self):
        return self.nome_usuario

class Voto(models.Model):
    mensagem_voto = models.TextField(null=True, blank=True) 
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE) 
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)  
    
    def __str__(self):
        return f'Voto de {self.usuario.nome_usuario} na categoria {self.categoria.nome_categoria}'

```
## 📉 **Diagrama de Entidade e Relacionamento**

**Modelo Conceitual** 

![Conceitual](/img/conceitual.jpg)


**Modelo Lógico** 

![Lógico](/img/logico.png)