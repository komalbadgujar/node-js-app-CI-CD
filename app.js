const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello everyone i have deployed my 1st ci/cd pipeline using webhooks');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
