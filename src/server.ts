import express from 'express';

const app = express();
const port = 3000;
const host = 'http://localhost';

// app.use('/', express.json);    // json decoder

app.get('/*', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.warn(`Express is listening on ${host}:${port}`);
});
