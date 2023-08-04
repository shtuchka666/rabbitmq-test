require('dotenv').config();
const MicroMQ = require('micromq');

const app = new MicroMQ({
  name: 'main',
  rabbit: {
    url: process.env.RABBIT_URL,
  },
});

app.get('/hello', (req, res) => {
  console.log(`[m2] ${req.path}`);
  res.json({
    text: 'Hello, world!',
  });
});

app.start();