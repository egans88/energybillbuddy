import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

app.get('/api/bill/:mprn', async (req, res) => {
  const { mprn } = req.params;

  // Mocked ESB return for prototype
  const mock = {
    mprn,
    address: "Sample Address, Dublin",
    usage_kwh: 3200,
    standing_charge: 0.45,
    price_per_kwh: 0.34,
    provider: "ESB"
  };

  res.json(mock);
});

app.listen(3000, () => console.log('Prototype running on http://localhost:3000'));
