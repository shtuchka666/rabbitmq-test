require('dotenv').config();
const Gateway = require('micromq/gateway');

const app = new Gateway({
  microservices: ['main'],
  rabbit: {
    url: process.env.RABBIT_URL,
  },
});

app.get(['/hello'], async (req, res) => {
  console.log(`[m1] ${req.url}`);
  await res.delegate('main');
});

app.listen(process.env.PORT);