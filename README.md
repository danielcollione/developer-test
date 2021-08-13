## 📄 Instruções
- Faça o `clone` deste repositório, e em seguida, crie uma branch `nome-sobrenome`.
- Ao finalizar, crie um Pull Request da sua branch com todas as modificações.

1. Desenvolver página/processo de cadastro das informações do cliente:
    1. Adicionar um botão "Novo" na página de listagem (Home);
    2. Ao clicar neste botão, redirecionar para a página de cadastro de cliente;
    3. A página de cadastro de cliente deverá possuir os seguintes inputs para entrada de dados:
        - Nome (**obrigatório**)
        - Sobrenome (**obrigatório**)
        - CPF (**obrigatório**)
        - Idade (opcional)
        - Gênero (**obrigatório**)
        - E-mail (**obrigatório**)
        - Telefone (opcional)

    ***
    Sinta-se à vontade para ir além e incluir:
    - Validação de campos obrigatórios;
    - Validação de expressões regulares, como por exemplo, e-mail;
    - Inclusão de máscaras, como por exemplo nos campos de CPF e Telefone;

    Utilize a lib/package de sua preferência.
    ***

2. Desenvolver página/processo para visualização dos detalhes do cliente cadastrado. A página de listagem (Home) exibe apenas um resumo do cliente. Ao clicar sobre um dos itens da lista, deverá redirecionar para uma página que apresente o cadastro completo do cliente. Uma dica é reutilizar a página de cadastro (item 1), mas modificando-a para que, neste caso, os inputs fiquem desabilitados pois se trata apenas de visualização de dados (e não de edição).

3. Desenvolver processo de alteração dos dados do cliente cadastrado. Na página de visualização do cadastro completo (item 2), basta adicionar um botão "Alterar", que ao ser clicado, deverá habilitar os inputs para permitir a modificação das informações.

4. Desenvolver ação para exclusão do cliente cadastrado. Novamente, poderá adicionar na página de visualização do cadastro completo um botão "Excluir", que ao ser clicado, deverá excluir o registro do cliente.

5. Desenvolver pesquisa pelo nome/sobrenome do cliente. A pesquisa deverá permitir pesquisar por qualquer parte do conteúdo do nome/sobrenome. O campo que permitirá pesquisar já existe na página principal (Home) de listagem.

## 💻 Projeto

### O projeto possui em sua raiz 2 diretórios.

- O diretório `api` contem o código fonte do back-end em Node.js.
- O diretório `web` contem o código fonte do front-end em React.js.

## 🚀 Como rodar

Para executar será necessário abrir 2 janelas do console, 1 para o front-end e outra para o back-end.

1. Abra uma janela do console
2. Navegue até o diretório `web`
3. Instale as dependências com `npm` ou `yarn`
4. Inicie o servidor com `npm run start` ou `yarn run start`
5. Abra outra janela do console
6. Navegue até o diretório `api`
7. Instale as dependências com `npm` ou `yarn`
8. Inicie o servidor com `yarn run start`

Agora você pode acessar [localhost:3000](http://localhost:3000) no seu navegador.
