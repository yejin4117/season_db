const express = require('express');
const app = express();
const oracledb = require('oracledb');
const dbConfig = require('./dbconfig.js');

async function connectToDB() {
  try {
    await oracledb.createPool({
      user: dbConfig.user,
      password: dbConfig.password,
      connectString: dbConfig.connectString,
    });
    console.log('Connected to Oracle DB');
  } catch (err) {
    console.error('Error connecting to Oracle DB:', err);
  }
}

app.get('/api/data', async (req, res) => {
  try {
    const connection = await oracledb.getConnection();
    const result = await connection.execute('SELECT * FROM your_table');
    await connection.close();

    res.json(result.rows);
  } catch (err) {
    console.error('Error executing Oracle query:', err);
    res.status(500).json({ error: 'Error executing Oracle query' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

connectToDB();