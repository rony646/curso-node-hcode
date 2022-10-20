const express = require('express')
const router = express.Router();


function logRequest(req, res, next) {
  console.log('Executando middleware para a rota de usuarios')
  return next();
}

router.get('/', logRequest, (req, res) => {
  res.send('user ');
});

router.post('/', (req, res) => {
  const body = `Login: ${req.body.login}\nSenha: ${req.body.senha}`;
  res.send('user post' + body);
});

module.exports = router;