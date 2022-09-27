const { spawn } = require('child_process');

const ls = spawn('ls', ['..', '-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.on('close', (code) => {
  console.log(`finalizando com o codigo: ${code}`);
});
