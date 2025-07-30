---
sidebar_position: 1
---

# Documentação 

Esse projeto foi desenvolvido usando

[![Stacks](https://skillicons.dev/icons?i=js,html,css,django,python,sqlite,azure,excel)](https://skillicons.dev)
# eLOGiar 🚀

## Introdução 📝

O eLOGiar surgiu como uma proposta de hackathon apresentada pela LOM, área de logística da Bosch Campinas (CaP) 🏭, durante o evento **ConectaLOG** 🎉, que premia os funcionários da logística pelo seu desempenho. A plataforma foi criada para promover colaboração 🤝 e iniciativa, permitindo a votação dos colaboradores em três categorias: **InovaLOG** 💡, **FaciLOG** ⚙️ e **MaxiLOG** 🌟, com o objetivo de incentivar **inovação**, **facilitação** e **colaboração** no setor.

## Justificativa 🔍

O eLOGiar transforma o ConectaLOG em uma experiência mais interativa, dinâmica e colaborativa 🌈, atuando como um catalisador para a melhoria contínua na logística da Bosch Campinas. A plataforma alinha os interesses da empresa com os anseios dos colaboradores, criando um ambiente de trabalho mais motivado 😊, eficiente ⚡ e engajado 🤗.

Ao premiar iniciativas que otimizam processos, reduzem custos e melhoram a competitividade 📈, o eLOGiar fomenta o pensamento criativo 🎨 e a melhoria contínua, reforçando a cultura de inovação. Além disso, ao reconhecer práticas que facilitam processos, a plataforma promove operações mais ágeis 🏃‍♂️ e menos propensas a erros ✅.

## Objetivos 🎯

### Objetivos Gerais 🌍

O objetivo principal do eLOGiar é conectar os colaboradores da área de Logística 🤝, reconhecendo atos de proatividade, eficiência, inovação e trabalho em equipe por meio de indicações feitas entre colegas. Os premiados são celebrados no evento ConectaLOG 🎊.

### Objetivos Específicos 🔧

- Desenvolver uma ferramenta de fácil acesso para elogiar atitudes de colaboradores 🌟.
- Conectar pessoas de diferentes áreas da logística da planta 🌐.
- Promover boas atitudes, criando um ambiente de trabalho mais positivo 😊.
- Compartilhar ideias 💭 e elogiar iniciativas individuais ou coletivas.
- Estabelecer uma cultura de reconhecimento, valorizando ideias, ações e comportamentos inspiradores 🎉.
- Incentivar atitudes positivas que contribuam para um ambiente colaborativo, respeitoso e produtivo 🤗.
- Criar uma cultura sólida de valorização por meio de uma plataforma web acessível 🌐, permitindo o envio e visualização de elogios de forma simples e integrada ao dia a dia.

## Product Backlog 📋

O *Product Backlog* descreve as funcionalidades que o software eLOGiar deve possuir para atender às necessidades identificadas.

### Administradores 🛠️

- **RF01 – Gerenciar usuários** 👤
  - **RF01.1 – Cadastrar usuário** ➕  
    Permitir o cadastro de novos usuários com as informações necessárias.
  - **RF01.2 – Atualizar informações de usuários** ✏️  
    Permitir a edição das informações de usuários já cadastrados, quando necessário.
  - **RF01.3 – Excluir usuário** 🗑️  
    Permitir a exclusão de usuários do sistema, caso necessário.
  - **RF01.4 – Exibir informações de usuários** 📄  
    Permitir a visualização das informações dos usuários cadastrados, de forma organizada e acessível.
  - **RF01.5 – Buscar usuários por EDV** 🔍  
    Permitir que o sistema busque usuários pelo EDV, facilitando o preenchimento de informações durante a votação.

- **RF02 – Exportar informações** 📊  
  - **RF02.1 – Exportar Relatórios em Excel** 📈  
    Permitir a geração e o download de relatórios em arquivo .xlsx contendo dados como elogios realizados, datas, usuários envolvidos e categorias, para fins de controle e análise.
  - **Rf02.2 – Exportar Detalhes dos Votos** 📋  
    Permitir a exportação de um relatório detalhado com informações do votante, votação, categoria, setor, gestor e mensagem registrada.
  - **RF02.3 – Exportar Votos por Equipe** 👥  
    Permitir a exportação de um relatório específico com os votos realizados por equipes, incluindo os membros votados, o nome da equipe e a mensagem enviada.

### Usuário Padrão 👷

- **RF03 – Escolher categoria** 🏷️  
  - **RF03.1 – Categoria InovaLOG** 💡  
    Permitir escolher a categoria InovaLOG para atitudes consideradas inovadoras no setor.
  - **RF03.2 – Categoria MaxiLOG** ⚙️  
    Permitir escolher a categoria MaxiLOG para atitudes de facilitação no setor.
  - **RF03.3 – Categoria FaciLOG** 🤝  
    Permitir escolher a categoria FaciLOG para atitudes de colaboração no setor.

- **RF04 – Escolher votar solo ou equipe** 🗳️  
  - **RF04.1 – Voto solo** 👤  
    Permitir que o usuário realize um voto individual, escolhendo apenas um colaborador para elogiar.
  - **RF04.2 – Voto equipe** 👥  
    Permitir que o usuário realize um voto coletivo, escolhendo uma equipe ou grupo de colaboradores para elogiar em conjunto.

- **RF05 – Voto solo** 🗳️  
  - **RF05.1 – Listar Categorias Disponíveis** 📋  
    Permitir que o sistema exiba todas as categorias disponíveis para o voto individual, facilitando a escolha do tipo de reconhecimento.
  - **RF05.2 – Listar Usuários Elegíveis para Voto** 👥  
    Exibir a lista de colaboradores disponíveis para receber elogios, organizados por nome ou setor.
  - **RF05.3 – Realizar Voto Individual** ✅  
    Permitir que o usuário selecione um colega e realize um voto individual, escolhendo a categoria e registrando uma mensagem de elogio.
  - **RF05.4 – Impedir Autovoto** 🚫  
    Bloquear a possibilidade de que o usuário vote em si mesmo, garantindo imparcialidade no processo.
  - **RF05.5 – Impedir Votos Duplicados** 🔄  
    Validar se já existe um voto do mesmo votante para o mesmo votado na mesma categoria, impedindo duplicidade.
  - **RF05.6 – Registrar Mensagem do Elogio** 💬  
    Permitir que o votante inclua uma mensagem personalizada junto ao voto, valorizando ainda mais o reconhecimento.
  - **RF05.7 – Redirecionar Após Voto com Sucesso** ➡️  
    Após o envio do voto, redirecionar o usuário para uma página de confirmação ou listagem de votos realizados.

- **RF06 – Voto por equipe** 👥  
  - **RF06.1 – Cadastrar Nome da Equipe Votante** 📝  
    Permitir que o votante insira o nome da equipe responsável pelo elogio coletivo.
  - **RF06.2 – Definir Quantidade de Membros Votados** 🔢  
    Permitir a definição da quantidade de colaboradores que serão votados como equipe.
  - **RF06.3 – Selecionar Membros da Equipe Votada** ✅  
    Permitir a seleção de colaboradores que receberão o voto coletivo como parte de uma equipe.
  - **RF06.4 – Validar Número de Membros Selecionados** ✔️  
    Garantir que a quantidade de membros escolhidos corresponda ao número informado no campo "quantidade de membros".
  - **RF06.5 – Impedir Votos Duplicados por Equipe** 🚫  
    Verificar se já existe um voto da mesma equipe para os mesmos membros em uma mesma categoria, impedindo repetições.

- **RF07 – Visualização de Informações** 🖥️  
  - **RF07.1 – Exibir Página Inicial do Sistema** 🏠  
    Permitir o acesso a uma página inicial com a identidade visual do projeto e links para navegação (ex.: votação, login, resultados etc.).
  - **RF07.2 – Exibir Página de Votos Realizados** 📜  
    Permitir que o usuário visualize todos os votos registrados no sistema, organizados por data, categoria ou colaborador.
  - **RF07.3 – Exibir Página de Carregamento** ⏳  
    Exibir uma tela temporária com animação ou mensagem informativa durante o carregamento de dados ou redirecionamentos.
  - **RF07.4 – Exibir Página de Login** 🔐  
    Exibir uma tela para que administradores e usuários autorizados possam realizar login no sistema.

- **RF08 – Administração e Segurança** 🔒  
  - **RF08.1 – Proteger Acesso à Rota de Exclusão** 🛡️  
    Restringir o acesso à funcionalidade de reset apenas para usuários autenticados como staff (admin).
  - **RF08.2 – Proteger API de Exportação com Autenticação** 🔑  
    Permitir acesso à funcionalidade de exportação de votos apenas para usuários autenticados via token ou sessão.
  - **RF08.3 – Validar Dados nos Formulários** ✅  
    Garantir que todos os campos obrigatórios sejam preenchidos antes de permitir o envio dos votos, evitando erros ou dados incompletos.

## Requisitos Não Funcionais ⚙️

- **RNF01 – Disponibilidade na Web via Azure** ☁️  
  O sistema deverá estar hospedado na nuvem, utilizando os serviços da Microsoft Azure, garantindo acesso contínuo aos usuários de toda a planta, por meio de navegador web.

- **RNF02 – Interface Intuitiva e Responsiva** 📱  
  A aplicação deverá possuir uma interface amigável, simples e de fácil uso, adaptável a diferentes dispositivos (desktop, tablet e smartphone).

- **RNF03 – Segurança de Acesso e Dados** 🔐  
  O sistema deverá utilizar HTTPS e mecanismos de autenticação para proteger os dados dos usuários, votos e relatórios. Apenas administradores autenticados poderão acessar funções críticas, como exportações e exclusão de votos.

- **RNF04 – Performance e Tempo de Resposta** ⚡  
  O sistema deverá responder às requisições do usuário com um tempo médio de carregamento inferior a 2 segundos, em condições normais de rede.

- **RNF05 – Compatibilidade entre Navegadores** 🌐  
  O sistema deverá ser compatível com os navegadores modernos mais utilizados, como Google Chrome, Microsoft Edge e Mozilla Firefox.

- **RNF06 – Escalabilidade** 📈  
  A aplicação deverá estar prepared para escalar horizontalmente na Azure, caso haja aumento de acessos simultâneos, especialmente durante eventos como o ConectaLOG.

- **RNF07 – Backup e Integridade dos Dados** 💾  
  O banco de dados deverá ser hospedado em serviço gerenciado da Azure (como Azure SQL ou PostgreSQL), com backup automático diário para garantir a recuperação de informações em caso de falhas.

- **RNF08 – Exportação em Formato Padrão** 📊  
  Os relatórios exportados devem estar no formato .xlsx, compatíveis com o Microsoft Excel, organizados e com dados estruturados para facilitar a leitura e análise.

- **RNF09 – Suporte e Manutenção** 🛠️  
  O sistema deverá possuir uma estrutura que permita futuras manutenções, atualizações e inclusão de novas funcionalidades, com versionamento controlado.

## Premissas 📌

- **PRE01 – Infraestrutura de rede** 🌐  
  Presume-se que a Planta possui infraestrutura de rede e acesso à Anno em toda a planta.

- **PRE02 – Cadastro prévio de usuários** 👤  
  O sistema parte do princípio de que os dados de colaboradores estão atualizados e disponíveis.

- **PRE03 – Cronograma do ConectaLOG** 📅  
  O evento ConectaLOG ocorrerá em períodos definidos pela empresa, servindo como base para a contabilização dos votos.

- **PRE04 – Boa-fé dos colaboradores** 🤝  
  Assume-se que os votos e elogios serão feitos com honestidade e sem tentativa de manipulação.

- **PRE05 – Escopo restrito à logística** 🏭  
  O sistema será utilizado apenas por colaboradores da área de Logística da planta.

- **PRE06 – Apoio da liderança** 👑  
  Supõe-se o apoio e engajamento dos gestores para promover a cultura de reconhecimento.

## Restrições 🚫

- **RES01 – Ambiente web exclusivo** 🌐  
  O sistema deve funcionar exclusivamente em ambiente web.

- **RES02 – Proibição de autovoto e votos duplicados** 🚫  
  Um usuário não pode votar em si mesmo ou em outro colega duas vezes na mesma categoria.

- **RES03 – Acesso restrito a administradores** 🔐  
  Somente administradores com perfil de staff poderão acessar funcionalidades críticas.

- **RES04 – Cadastro obrigatório** 📝  
  Necessário o usuário estar cadastrado no banco de dados para votar ou ser votado.

- **RES05 – Dispositivo necessário** 💻  
  Necessário um dispositivo para acesso ao site.