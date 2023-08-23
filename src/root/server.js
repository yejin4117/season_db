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

app.get('/', (req, res) => {
  res.send('Hello, this is the root!');
});

app.get('/api/data', async (req, res) => {
  try {
    const connection = await oracledb.getConnection();
    const result = await connection.execute('SELECT * FROM myuser');
    await connection.close();

    res.json(result.rows);
  } catch (err) {
    console.error('Error executing Oracle query:', err);
    res.status(500).json({ error: err.message }); // 실제 오류 메시지를 반환
  }
});

const PORT = 5000;
(async () => {
  await connectToDB(); // 데이터베이스 연결 완료 후 앱 시작
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();

connectToDB();