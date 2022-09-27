const path = require('path');

console.log(path.basename('/Users/ronys/Documents/estudos/curso-node/03-native-apis/path.js'));
console.log(path.normalize('/Users/ronys/Documents/estudos\\/../curso-node/03-native-apis/path.js'));
console.log('join path: ', path.join('/teste', 'teste2', 'teste3/teste4', 'dir2', '..'));
console.log('resolve: ', path.resolve('path.js'));
console.log('resolve: ', path.extname('path.js'));