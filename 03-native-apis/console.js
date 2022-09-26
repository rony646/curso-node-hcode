console.log('teste');

//erro
console.error(new Error('Temos problemas'))

const carros = ['GM', 'FIAT', 'VW', 'Renault', 'BMW'];

console.table(carros);

const dados = {name: 'Rony', empresa: 'Grupo GB'};

console.table(dados);

console.count('processo');
console.count('processo');
console.count('processo');

console.log('Resetando prrocesso');
console.countReset('processo');
console.count('processo');

console.time('contador');

console.timeEnd('contador');

console.assert(true, 'Do something');
console.assert(false, 'ih rapaz')

