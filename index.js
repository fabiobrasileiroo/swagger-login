// index.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const basicAuth = require('basic-auth');
const swaggerSpec = require('./swagger');

const app = express();

// Middleware de autenticação básica
function auth(req, res, next) {
  const user = basicAuth(req);

  if (!user || user.name !== 'admin' || user.pass !== '123456') {
    res.set('WWW-Authenticate', 'Basic realm="401"');
    return res.status(401).send('Autenticação requerida.');
  }

  next();
}

// Ativa Swagger com autenticação no próprio endpoint
app.use('/docs', auth, swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Retorna uma mensagem de boas-vindas
 *     security:
 *       - basicAuth: []
 *     responses:
 *       200:
 *         description: Sucesso
 */
app.get('/hello', auth, (req, res) => {
  res.json({ message: 'Olá, usuário autenticado!' });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/docs');
});
