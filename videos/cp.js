const { spawn } = require('child_process');

const ls = spawn('code', ['.']);

ls.stdout.on('data', (data) => {
  console.log(`data: ${data}`)
});

ls.stderr.on('data', (data) => {
  console.log(`error: ${data}`)
});

ls.on('close', (code) => {
  console.log(`Processo em segundo plano finalizado \n code: ${code}`)
});