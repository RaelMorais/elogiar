---
sidebar_position: 6
--- 

## Requisitos não funcionais 

Os requisitos não funcionais têm como objetivo definir as qualidades, restrições e padrões do sistema, como desempenho, segurança, usabilidade, escalabilidade e disponibilidade.

Junto com as premissas e restrições, toda regra de négocio do nosso software é descrita aqui. 

## ⚙️ **REQUISITOS NÃO FUNCIONAIS**

- **RNF01** – O sistema permitir que o **administrador** realize operações de **Criar**, **Atualizar** e **Remover** usuários ou categorias.
- **RNF02** – O sistema deve permitir acessar a administração **somente com login**.
- **RNF03** – O **usuário** só pode votar em uma pessoa **uma única vez** por categoria.
- **RNF04** – O sistema deve ser capaz de aguentar **várias requisições de votos** simultâneas.
- **RNF05** – O banco de dados deve **armazenar todas as informações** colocadas no momento da votação.
- **RNF06** – O servidor de hospedagem **deve ser em Django**.

## 📌 **PREMISSAS**

- **PRE01** – **Acessar o eLOGiar**.
- **PRE02** – **Acessar a escolha de categoria**.
- **PRE03** – **Escolher o usuário** a ser votado e o **votante**.
- **PRE04** – **Realizar voto**.
- **PRE05** – **Confirmar voto através de vídeo**.

## 🚫 **RESTRIÇÕES**

- **RES01** – **Necessário hospedagem** do servidor **Django**.
- **RES02** – **Necessário um dispositivo** para acesso ao site.
- **RES03** – Um **usuário não pode votar** nele mesmo ou em outro colega **duas vezes** na mesma categoria.
- **RES04** – **Necessário o usuário estar cadastrado** no banco de dados para votar ou ser votado.


