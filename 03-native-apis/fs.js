const fs = require('fs');

fs.readdir(__dirname, (err, data) => {
  if(err) throw err;

  data.forEach((file) => {
    console.log(__dirname + '/' + file);
  });
})