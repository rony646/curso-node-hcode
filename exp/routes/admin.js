const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
  res.send('admin: ');
});

router.post('/', (req, res) => {
  const body = `Login: ${req.body.login}\nSenha: ${req.body.senha}`;
  res.send('admin post' + body);
});

module.exports = router;