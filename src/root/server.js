const express = require('express');
const bodyParser = require('body-parser');
const oracledb = require('oracledb');
const cors = require('cors');
const dbConfig = require('./dbConfig.js');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 기본 경로에 대한 처리
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 로그인 처리
app.get('/api/login', async (req, res) => {
  const { ID, PASSWORD } = req.query;
  
  try {
    const connection = await oracledb.getConnection({
      user: dbConfig.user,
      password: dbConfig.password,
      connectString: dbConfig.connectString,
    });

    const sql = `
      SELECT COUNT(*) AS COUNT
      FROM MYUSER
      WHERE ID = :ID AND PASSWORD = :PASSWORD
    `;

    const result = await connection.execute(sql, [ID, PASSWORD]);

    const rowCount = result.rows[0].COUNT;
    if (rowCount === 1) {
      res.json({ message: '로그인 성공' });
    } else {
      res.json({ message: '로그인 실패' });
    }

    await connection.close();
  } catch (error) {
    console.error('에러:', error);
    res.status(500).json({ message: '서버 에러' });
  }
});

// 회원가입 처리
app.post('/api/signup', async (req, res) => {
  const { ID, PASSWORD, NAME, BIRTHDAY } = req.body;

  // 클라이언트로부터 전송된 데이터 확인
  console.log('Received signup request:');
  console.log('ID:', ID);
  console.log('PASSWORD:', PASSWORD);
  console.log('NAME:', NAME);
  console.log('BIRTHDAY:', BIRTHDAY);

  try {
    const connection = await oracledb.getConnection({
      user: dbConfig.user,
      password: dbConfig.password,
      connectString: dbConfig.connectString,
    });

    const sql = `
      INSERT INTO MYUSER (ID, PASSWORD, NAME, BIRTHDAY)
      VALUES (:ID, :PASSWORD, :NAME, TO_DATE(:BIRTHDAY, 'YYYY-MM-DD'))
    `;

    await connection.execute(sql, [ID, PASSWORD, NAME, BIRTHDAY]);

    // 데이터베이스에 삽입된 데이터 확인
    console.log('Data inserted into MYUSER table:');

    res.json({ message: '회원가입 성공' });

    await connection.close();
  } catch (error) {
    console.error('에러:', error);
    res.status(500).json({ message: '서버 에러' });
  }
});

// 테이블 생성 및 관계 설정
// (async () => {
//   try {
//     const connection = await oracledb.getConnection({
//       user: dbConfig.user,
//       password: dbConfig.password,
//       connectString: dbConfig.connectString,
//     });

//     let sql = `CREATE TABLE ART (
//       ARTID VARCHAR2(50),
//       TITLE VARCHAR2(50),
//       ARTIST VARCHAR2(50)
//     )`;
//     await connection.execute(sql);

//     sql = "ALTER TABLE art ADD PRIMARY KEY(artid)";
//     await connection.execute(sql);

//     // Create MYUSER table
//     sql = `CREATE TABLE MYUSER (
//       ID VARCHAR2(20),
//       PASSWORD VARCHAR2(20),
//       NAME VARCHAR2(50),
//       BIRTHDAY DATE
//     )`;
//     await connection.execute(sql);

//     sql = "ALTER TABLE myuser ADD PRIMARY KEY(id)";
//     await connection.execute(sql);

//     // Create COMMENTS table
//     sql = `CREATE TABLE COMMENTS (
//       COMID VARCHAR2(50),
//       ID VARCHAR2(50),
//       ARTID VARCHAR2(50),
//       COMCONTENTS VARCHAR2(50)
//     )`;
//     await connection.execute(sql);

//     sql = "ALTER TABLE comments ADD PRIMARY KEY(comid)";
//     await connection.execute(sql);

//     sql = `ALTER TABLE comments ADD FOREIGN KEY(id) REFERENCES myuser(id)`;
//     await connection.execute(sql);

//     sql = `ALTER TABLE comments ADD FOREIGN KEY(artid) REFERENCES art(artid)`;
//     await connection.execute(sql);

//     // Create SEARCH table
//     sql = `CREATE TABLE SEARCH (
//       SEARID VARCHAR2(100),
//       SEARCONTENTS VARCHAR2(100)
//     )`;
//     await connection.execute(sql);

//     sql = "ALTER TABLE search ADD PRIMARY KEY(searid)";
//     await connection.execute(sql);

//     console.log("테이블 생성 및 관계 설정 완료!!");
    
//     await connection.close();
//   } catch (err) {
//     console.error("에러:", err);
//   }
// })();

// 서버 실행
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
