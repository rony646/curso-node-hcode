import { EventEmitter } from 'events';

class Event extends EventEmitter {}

const myEvent = new Event();

// subscriber
myEvent.on('safety', (x,y) => {
  console.log(`Executando o evento 'safety': ${x} ${y}`);
});

// publisher
myEvent.emit('safety', 'userAdmin', 'Alterou salario');

myEvent.on('encerrar', (dados) => {
  console.log('Assinante: ' + dados);
});

myEvent.emit('encerrar', 'Encerrando')