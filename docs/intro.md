---
sidebar_position: 1
---

# Documentação 

Esse projeto foi desenvolvido usando

[![Stacks](https://skillicons.dev/icons?i=js,html,css,django,python,sqlite,docsaurus,trello)](https://skillicons.dev)

## INTRODUÇÃO

🚀 **INTRODUÇÃO E JUSTIFICATIVA**

O **eLOGiar** surgiu com o propósito de ser um auxílio para tornar realidade uma visão que nasceu nas áreas de **logística da Bosch**. A logística dentro da Bosch é muito grande, com aproximadamente **300 funcionários** que são divididos em **7 áreas diferentes**. 

💼 Um gestor da área tem que cuidar de diversos colaboradores, e por conta disso, é muito complicado estar sempre atento às atitudes de cada um deles, especialmente devido à correria que o cargo exige. Isso gerou um incômodo entre os gestores.

**Consequência?** Muitas boas atitudes não são vistas nem devidamente reconhecidas. E é por isso que surgiu o bordão:

> **_"Boas atitudes não devem ficar invisíveis."_**

---

## 🎯 **OBJETIVOS**

## 2.1. **Objetivos Gerais**

O principal objetivo do **eLOGiar** é servir como um meio de conectar os colaboradores da área **Logística**, reconhecendo atos de **proatividade**, **eficiência**, **inovação** e **trabalho em equipe**. Isso será feito por meio de **indicações entre os colegas de trabalho**, que poderão ser premiados em um evento especial para o setor: **ConectaLOG**.

## 2.2. **Objetivos Específicos**

- 🌟 Desenvolver uma ferramenta **fácil de acessar** para **elogiar** alguém.
- 🤝 Conectar as pessoas das diversas áreas de **logística** da planta.
- 💬 **Compartilhar ideias** e **elogiar as atitudes** de cada um.
- 📝 **Entrar no eLOGiar**, elogiar seus feitos e características.
- 🏆 **Servir como parâmetro** em premiações na área.

---

## 📋 **PRODUCT BACKLOG**

# 🚀 **RF01 – Administradores**

- **RF01.1** – Cadastrar os **usuários** no sistema. 
- **RF01.2** – Modificar as **categorias**. 
- **RF01.3** – Exportar os **dados de votação** em **Excel**. 

# 🎯 **RF02 – Usuário padrão**

- **RF02.01** – Deve **selecionar a categoria**. 
- **RF02.02** – Deve **selecionar uma pessoa** para votar. 
- **RF02.03** – Deve inserir uma **mensagem opcional**. 
- **RF02.04** – Deve **enviar** seu **voto**. 

---

## ⚙️ **REQUISITOS NÃO FUNCIONAIS**

- **RNF01** – O sistema permitir que o **administrador** realize operações de **Criar**, **Atualizar** e **Remover** usuários ou categorias.
- **RNF02** – O sistema deve permitir acessar a administração **somente com login**.
- **RNF03** – O **usuário** só pode votar em uma pessoa **uma única vez** por categoria.
- **RNF04** – O sistema deve ser capaz de aguentar **várias requisições de votos** simultâneas.
- **RNF05** – O banco de dados deve **armazenar todas as informações** colocadas no momento da votação.
- **RNF06** – O servidor de hospedagem **deve ser em Django**.

---

## 📌 **PREMISSAS**

- **PRE01** – **Acessar o eLOGiar**.
- **PRE02** – **Acessar a escolha de categoria**.
- **PRE03** – **Escolher o usuário** a ser votado e o **votante**.
- **PRE04** – **Realizar voto**.
- **PRE05** – **Confirmar voto através de vídeo**.

---

## 🚫 **RESTRIÇÕES**

- **RES01** – **Necessário hospedagem** do servidor **Django**.
- **RES02** – **Necessário um dispositivo** para acesso ao site.
- **RES03** – Um **usuário não pode votar** nele mesmo ou em outro colega **duas vezes** na mesma categoria.
- **RES04** – **Necessário o usuário estar cadastrado** no banco de dados para votar ou ser votado.


## 🗓️ **Sprints**

**Primeiro Dia** 🚀

- 🎉 **Sorteio dos grupos** de projeto do **Hackathon**;
- 📅 **Reunião de apresentação do projeto** com a **Roseli**;
- 📌 **Agendamento de reunião** para mais detalhes do projeto;
- 🛠️ **Início da prototipação**.

---

**Segundo Dia** 📈

- 💬 **Reunião com a Monique e Marcelo** para entendermos mais sobre o projeto.
- 🎨 **Definição do design** no **Figma**.
- 🖌️ **Feito 70% do design** no **Figma**.
- 🌐 **Programação da tela inicial e principal** do **WebApp**.
- 🔧 **Definição do escopo do backend** e desenvolvimento do **documento de levantamento de requisitos** do software.
- 🔄 **Escopo do backend** para entender a **lógica por trás**.
- 🎉 **Sorteio dos grupos** de projeto do **Hackathon**.

---

**Terceiro Dia** 💻

- 🖥️ **Finalização das páginas principais** em **HTML**, com **toda estilização**.
- 🎨 **Desenvolvimento do design** de **páginas extras** no **Figma**.
- 🎥 **Reunião entre os integrantes** sobre o **vídeo pitch**.
- 🛠️ **Desenvolvimento de 60% do backend**.
- ✅ **Finalização de 100% do design** no **Figma**.
- 🗂️ **Escopo do banco de dados**.
- 🎬 **Início do desenvolvimento do vídeo pitch e apresentação**.
- 🔗 **Início da integração entre front e back**.

---

**Quarto Dia** ⚙️

- ✅ **Finalização do backend**.
- 🔗 **Finalização da integração** entre **back** e **front**.
- 🎬 **Gravação de uma parte do vídeo pitch**.
- 📝 **Início da elaboração do roteiro** para a apresentação.
- 💬 **Reunião breve** entre os integrantes sobre o **vídeo pitch**.

---

**Quinto Dia** 🏁

- ✨ **Finalização dos GIFs**.
- 🎥 **Realização do Vídeo Pitch**.
- 💻 **Finalização do Frontend**.
- 📞 **Reunião com os Focal Points**.
- 📋 **Roteirização das atividades** para a próxima semana.

---

**Sexto Dia** ⏳

- ✨ **Finalização dos GIFs**.
- 🎥 **Realização do Vídeo Pitch**.
- 💻 **Finalização do Frontend**.

---

**Sétimo Dia** 🌟

- ✅ **Finalização do site**.
- 🔧 **Ajustes finais no front**.
- 🎬 **Continuação da edição do vídeo pitch**.
- 📑 **Elaboração da dinâmica da apresentação**.
- 📝 **Finalização da documentação**.
- 🖥️ **Início do desenvolvimento da documentação** no **Docsaurus**.

---

**Oitavo Dia** 🎯

- ✅ **Finalização do site**.
- 🎤 **Treinamento para apresentação**.

---

**Nono Dia** 🎉

- 🎤 **Treinamento para apresentação**.
- ✅ **Conclusão do Docsaurus**.


## 🎶Caso de uso 

![Caso de uso](/img/casoUso.jpg)

## 🎲 **Modelo de Banco de Dados**

O banco de dados foi desenvolvido utilizando o **SQLite** como **SGBD** integrado ao framework **Django** em **Python**. A seguir, descrevemos a estrutura lógica e conceitual do modelo. Ele é composto por três **entidades principais**:

---

1️⃣ **Categoria** 🎯

A tabela **Categoria** armazena informações sobre as categorias de votação, como o nome da categoria.

- **Atributos**:
  - `id_categoria`: Identificador único para cada categoria (Chave Primária).
  - `nome_categoria`: Nome da categoria, como "Melhor Colaborador", "Melhor Inovação", etc.

---

2️⃣ **Usuário** 👤

A tabela **Usuário** armazena informações sobre os usuários que podem votar, como o nome do usuário.

- **Atributos**:
  - `id_usuario`: Identificador único para cada usuário (Chave Primária).
  - `nome_usuario`: Nome do usuário que participa da votação.

---

3️⃣ **Votos** 🗳️

A tabela **Votos** armazena os votos em si, incluindo a mensagem votada, a categoria e o usuário associados ao voto.

- **Atributos**:
  - `id_voto`: Identificador único para cada voto (Chave Primária).
  - `mensagem_voto`: Mensagem opcional que o usuário pode incluir ao votar.
  - `id_categoria`: Relacionamento com a tabela **Categoria** (Chave Estrangeira).
  - `id_usuario`: Relacionamento com a tabela **Usuário** (Chave Estrangeira).

---

🔗 **Relacionamentos**:

- **Categoria - Votos**:
  - Um relacionamento de **um para muitos**, onde **uma categoria** pode ter múltiplos votos associados a ela.
  
- **Usuário - Votos**:
  - Um relacionamento de **um para muitos**, onde **um usuário** pode realizar múltiplos votos.

---

🔑 **Chaves**:

- **Chaves Primárias**:
  - `id_categoria`, `id_usuario` e `id_voto` são as chaves primárias que identificam exclusivamente cada registro nas respectivas tabelas.
  
- **Chaves Estrangeiras**:
  - `id_categoria` e `id_usuario` na tabela **Votos** estabelecem os relacionamentos com as tabelas **Categoria** e **Usuário**, respectivamente.

---

🔄 **Tecnologias**:

- **SQLite** 📊: Banco de dados relacional leve utilizado para armazenar os dados de forma eficiente.
- **Django** 🐍: Framework web de alto nível para desenvolvimento rápido de aplicações Python.
- **Python** 🧑‍💻: Linguagem de programação que alimenta o framework Django e a lógica por trás da aplicação.

---

📌 **Exemplo de Estrutura SQLite Django**:

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


## 🔍 Pesquisas Realizadas 

Conversamos com a área para tentar entender quais eram suas dores em relação ao projeto. Ondes após algumas reuniões entendemos e entre os integrantes conversamos e chegamos as conclusões para desenvolver o projeto.  

## 🌟 **Metodologia Usada** 🌟

A **metodologia ágil** foi adotada para garantir **flexibilidade** e **entregas rápidas** no desenvolvimento deste projeto. 🚀 Usamos **reuniões diárias (daily stand-ups)** para alinhar o que foi feito no dia anterior e planejar o que seria feito no dia seguinte, garantindo que todos estivessem sempre **atualizados** e cientes do progresso! 🗓️

O projeto foi dividido em **sprints** com prazos definidos para cada etapa. Cada fase foi pensada com carinho e dedicação. Vamos ver como aconteceu:

---

✨ **ETAPA 1 - Começando com tudo!** ✨

**Sprints:**

- **Design UI/UX**: Criamos uma interface linda e super funcional, pensando na **usabilidade** e **estética**! 🎨
- **Escopo BackEnd**: Definimos o escopo do **backend** e escolhemos as tecnologias que seriam usadas. 💻
- **Escopo FrontEnd**: Decidimos as **linguagens** que iriam dar vida ao **FrontEnd**! ⚡
- **Mascote**: Nosso mascote ficou pronto e tem várias variações fofas para o projeto! 🦄
- **Definição de cores**: Escolhemos as **cores** de acordo com o nosso mascote, criando uma paleta super vibrante! 🌈

---

🚀 **ETAPA 2 - Hora de entrar no código!** 🚀

**Sprints:**

- **Back-end**: Começamos a desenvolver a **estrutura de servidor** e o **banco de dados**. 🖥️
- **Front-end**: A parte visual e interativa foi implementada, e agora tudo se conecta ao back-end! 💡
- **Integração Back-end/Front-end**: Garantimos que o **Front** e o **Back** se comunicassem sem falhas! 🔗
- **Documentação**: Criamos a **documentação técnica** para o **BackEnd** e o **banco de dados**. 📝
- **Roteiro vídeo pitch**: Começamos a criar o **roteiro** do vídeo pitch, já planejando todos os detalhes. 🎬

---

**Roteiro do vídeo pitch** 🎥

- **4.1. Roteiro**: Definimos o que precisaríamos para gravar e editar o vídeo, e organizamos tudo com muito cuidado. 📝
- **4.2. Gravação do vídeo**: O **vídeo pitch** foi gravado com toda a nossa energia e entusiasmo! 🎤

---

🌟 **ETAPA 3 - A finalização é agora!** 🌟

**Sprints:**

- **Edição vídeo pitch**: Colocamos a mão na massa e editamos o vídeo para ele brilhar ainda mais! ✂️
- **Finalização dos slides**: Ajustamos os slides da apresentação para deixá-los **perfeitos**! 🎤
- **Treinamento para Apresentação**: Ensaios e mais ensaios para garantir uma apresentação imbatível! 💪
- **Revisão do projeto**: Hora de revisar todos os detalhes e fazer os ajustes finais. 🔧

---

📅 **Organização e Ferramentas Usadas**

Para organização e desenvolvimento das **Sprints**, usamos o **Trello** para planejar, controlar e garantir que todas as tarefas fossem feitas no prazo. No **Trello**, criamos **Abas** para cada Sprint descrita acima. Assim, após cada tarefa ser concluída, ela era movida para a Aba de **"Concluídos"**. 📋

![Trello](/img/trello.png)

## **🦾 Prototipação**

![Trello](/img/p1.png)

Tela Inicial 

![Trello](/img/ideia.png)
Categorias 

![Trello](/img/FaciLOG.png)
FaciLOG

![Trello](/img/InovaLOG.png)
InovaLOG

![Trello](/img/LOGiMax.png)
LOGiMax

![Trello](/img/tela_final.png)
Tela de sucesso

# Muito obrigado! - Grupo B - 2025

[Acessar documentação](https://drive.google.com/file/d/1kP4aOG4IZVv6N64dQ1JvCVsBHiSf2iR-/view?usp=drive_link)
