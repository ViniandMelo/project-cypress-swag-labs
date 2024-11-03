# Projeto de Testes com Cypress - Sauce Demo

Este projeto utiliza o framework Cypress para automatizar testes no site [Sauce Demo](https://www.saucedemo.com/v1/), focando em funcionalidades de login e de carrinho de compras.

## Descrição

O projeto inclui testes automatizados para:

1. **Login**: Validação de login com credenciais válidas e inválidas.
2. **Carrinho**: Adição de um produto ao carrinho e verificação de que ele foi adicionado com sucesso.

## Estrutura dos Testes

- **Login.spec.js**: Contém os testes de login com dois cenários:
  - Login com sucesso.
  - Login inválido, verificando a mensagem de erro.
  
- **Carrinho.spec.js**: Contém o teste de adição de um produto ao carrinho, verificando a contagem e a visibilidade do item no carrinho.

## Pré-requisitos

- **Node.js** e **npm**: Certifique-se de que estão instalados em seu sistema.
- **Cypress**: Para instalar, rode o seguinte comando no terminal:

  ```bash
  npm install cypress --save-dev

## Estrutura do Código

Aqui está uma visão geral do que cada bloco de código faz:

### Testes de Login

- **Realizar login com sucesso**: Verifica se o usuário consegue realizar login com credenciais válidas.
- **Realizar login inválido**: Tenta fazer login com credenciais inválidas e verifica se a mensagem de erro correta é exibida.

### Teste de Carrinho

- **Adicionar produto ao carrinho com sucesso**: Realiza login, adiciona um produto ao carrinho e valida a adição.
