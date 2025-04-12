const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();


app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});


app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});


app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
