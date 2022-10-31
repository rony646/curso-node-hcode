const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({storage});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.post('/upload', upload.single('arquivo'), (req, res, next) => {
  const file = req.file;

  if(!file) {
    const error = new Error('Por favor selecione um arquivo!')
    error.httpStatusCode = 400
    return next(error)
  }
  
  res.send(file)
});


app.listen(3000, '127.0.0.1', () => {
  console.log(`Server running on port 3000`)
});