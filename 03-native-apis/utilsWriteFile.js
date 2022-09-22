const { promisify } = require('util');

const writeFile = promisify(require('fs').writeFile);
const conteudo = 'Criando um arquivo utilizando promisify';

writeFile('utilArquivo.txt', conteudo)
  .then(() => {
    console.log('Arquivo criado com sucesso!');
  })
  .catch(err => {
    console.log(`Deu erro: ${err}`);
  })