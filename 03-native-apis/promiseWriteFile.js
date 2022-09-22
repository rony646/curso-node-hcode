const { writeFile } = require('fs');

function criaArquivo(name, content) {
  return new Promise((resolve, reject) => {
    writeFile(name, content, err => {
      if(err) return reject(err);
      resolve();
    });
  })
}

criaArquivo('promiseArquivo.txt', 'Criando utilizando promises')
  .then(() => console.log('Criado!'))
  .catch(err => err);