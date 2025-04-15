---
sidebar_position: 1
---

# Introdução

Este projeto consiste em uma plataforma de votação interna desenvolvida com o framework Django (Python) e banco de dados SQLite, voltada para a indicação de usuários em diferentes categorias, como forma de reconhecimento ou premiação. A aplicação permite que os usuários votem em colegas, deixem mensagens de apoio, visualizem os votos registrados e exportem relatórios de votação em formato Excel.

A estrutura foi desenvolvida utilizando os princípios do MVC (Model-View-Controller) adaptado ao Django (MTV — Model-Template-View), integrando camadas de dados, lógica de negócio e apresentação. Também foram implementados endpoints de autenticação via JWT com o uso do Django REST Framework, garantindo segurança no acesso a funcionalidades restritas, como a exportação de dados.

O sistema é modular, fácil de escalar e pode ser adaptado para diferentes contextos organizacionais onde a coleta de votos, avaliações ou reconhecimentos formais sejam necessários.

## Escopo desta documentação

Nesta seção da documentação técnica, você encontrará as principais informações relacionadas à estrutura e funcionamento do sistema, com foco nos seguintes pontos:

**Banco de Dados:** Estrutura das tabelas, relacionamentos e modelo ORM com Django (models.py).

**URLs (Rotas):** Mapeamento das rotas HTTP (urls.py) e sua ligação com as respectivas views e funcionalidades.

**Views:** Lógica por trás das ações do sistema (listagem, votação, exportação, etc.), com foco na interação entre dados e interface.

**Requisitos Funcionais:** Descrevem o que o sistema faz, como permitir votação, exibir categorias e gerar relatórios.

**Requisitos Não Funcionais:** Descrevem como o sistema se comporta, como desempenho, segurança (JWT), organização modular e compatibilidade.

Este documento é destinado a desenvolvedores, mantenedores ou equipes técnicas que queiram compreender, manter ou evoluir o sistema.