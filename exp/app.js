const express = require('express');
const app = express();
const adminRoutes = require('./routes/admin');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/admin', adminRoutes);

app.listen(3000, () => {
  console.log('Server running on: http://localhost:3000')
});
