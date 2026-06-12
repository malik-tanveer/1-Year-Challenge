import express from "express";
const http = require('http');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('This is a simple Express server.');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});