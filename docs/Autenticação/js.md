# Java Script 

## Autenticação Front-End com JavaScrip

## Função login()

A função **login()** é responsável por realizar a autenticação do usuário via **API REST** utilizando as credenciais fornecidas (usuário e senha). 

Ela envia uma requisição para o endpoint JWT da aplicação backend, e em caso de sucesso, armazena os tokens de acesso no localStorage do navegador para uso posterior em chamadas autenticadas.

## Descrição 

```js
async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    try {
        const response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            errorElement.textContent = 'Login bem-sucedido!';
            window.location.href = '/votos/';
        } else {
            errorElement.textContent = data.detail || 'Erro ao fazer login';
        }
    } catch (error) {
        errorElement.textContent = 'Erro de conexão';
        console.error('Erro:', error);
    }
}

```

# Funcionamento 

**Captura de dados**: Obtém os valores dos campos username e password do formulário HTML.

**Requisição à API JWT**: Envia os dados em uma requisição POST para /api/token/.

**Processamento da resposta**: Se o login for válido, armazena os tokens access e refresh no localStorage.

**Redirecionamento**: Em caso de sucesso, redireciona o usuário para a rota /votos/.

**Tratamento de erros**: Exibe mensagens de erro em caso de falha de autenticação ou falha de rede.

Armazenamento dos Tokens

````localStorage.setItem('access_token', ...)````: Usado para autenticar requisições futuras.

````localStorage.setItem('refresh_token', ...)````: Usado para renovar o token de acesso.

## Função exportarExcel()

A função exportarExcel() é responsável por realizar uma requisição GET autenticada para a API do backend, com o objetivo de baixar um relatório de votos em formato .xlsx. A autenticação é feita via token JWT armazenado no localStorage.


```js 
async function exportarExcel() {
    const token = localStorage.getItem('access_token');
    const errorElement = document.getElementById('error');

    if (!token) {
        errorElement.textContent = 'Você precisa estar logado para exportar.';
        window.location.href = '/login/';
        return;
    }

    try {
        const response = await fetch('http://127.0.0.1:8000/exportar/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'votosElogiar.xlsx';
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
            errorElement.textContent = 'Arquivo exportado com sucesso!';
        } else {
            const contentType = response.headers.get('content-type');
            let errorData = {};
            if (contentType && contentType.includes('application/json')) {
                errorData = await response.json();
            }
            errorElement.textContent = errorData.detail || `Erro ao exportar o arquivo (status: ${response.status}).`;
        }
    } catch (error) {
        errorElement.textContent = 'Erro de conexão. Verifique o servidor.';
        console.error('Erro:', error);
    }
}
```

# Funcionamento 

**Verifica autenticação** Busca o access_token no localStorage. Se ausente, redireciona para login.

**Requisição GET** Realiza uma chamada autenticada à rota /exportar/ com header Authorization.

**Processamento da resposta** Se a resposta for válida (200 OK), o conteúdo (arquivo) é tratado como Blob e disparado para download automático.

**Tratamento de erros**	Em caso de erro HTTP ou falha de rede, exibe mensagens apropriadas ao usuário.
