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

#### Ficar anexado dentro do header com nome Authorization
<img width="753" height="1056" alt="2025-07-14-23:02:31_753x1056_screenshot" src="https://github.com/user-attachments/assets/2322a618-eb1b-4771-b7f1-6ec486393330" />
