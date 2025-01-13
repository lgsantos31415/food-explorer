# Back-End

Responsável pelo processamento de dados, regras de negócio e comunicação com bancos de dados e APIs. Operando no servidor, garantindo o funcionamento interno da aplicação e fornecendo informações para o Front-End.

Este projeto já possui um banco de dados pré-configurado com registros de usuários, pratos e pedidos. Caso seja necessário recomeçar, você pode excluir o banco de dados e executar novamente as migrations para recriar as tabelas e inserir os dados iniciais.

Para iniciar a aplicação e disponibilizar os serviços do Back-End, execute:
> npm start

Para aplicar a última versão das migrations e reconfigurar o banco de dados, execute:
> npm run migrate

## Usuários pré-cadastrados
Existem dois usuários pré-definidos para facilitar o teste da aplicação, os quais simulam diferentes papéis dentro do sistema. O administrador tem acesso a gestão da aplicação, enquanto o cliente realiza operações comuns como pedidos.

- Cliente (Customer) <br/>
Email: claudia@email.com <br/>
Senha: 123456

- Administrador (Admin) <br/>
Email: jacob@email.com <br/>
Senha: 123456
