# Go Go Go
``` bash
git clone https://github.com/fabiobrasileiroo/swagger-login.git && cd swagger-login && npm i && npm run dev
``` 
##  O que é o Basic Auth?

Basic Auth é uma forma simples e antiga de autenticação HTTP que consiste em enviar o usuário e senha codificados em Base64 no cabeçalho da requisição:

Authorization: Basic YWRtaW46MTIzNDU2

Esse valor é: admin:123456 codificado em base64. Isso não é criptografia, apenas ofuscação.

## É seguro?

### Não muito.

-  Envia o usuário e senha em toda requisição.

-  Esses dados podem ser facilmente extraídos se não usar HTTPS.

-  Não tem controle de expiração, logout, ou permissões.

-  Não detecta se um atacante está tentando força bruta.

-  Vulnerável a replay attacks em conexões inseguras.

### Só é seguro com:

-  HTTPS obrigatório.

-  Credenciais fortes (usuário/senha longos e aleatórios).

-  Escopo muito limitado de acesso.

