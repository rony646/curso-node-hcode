const EventEmitter = require('events');

class Event extends EventEmitter {}

const myEvent = new Event();

myEvent.on('safety', (x,y) => {
  console.log(`Executando o evento 'safety': ${x} ${y}`);
});

myEvent.emit('safety', 'userAdmin', 'Alterou salario');