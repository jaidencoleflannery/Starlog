const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const pool = require('./db/db');

const corsOptions = {
    origin: 'https://localhost:4200',
    optionsSuccessStatus: 200,
}

app.get('/', cors(corsOptions), (req, res) => {
    res.send('Server running.');
  });

app.get('/get-data', cors(corsOptions), async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});