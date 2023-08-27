var oracledb = require("oracledb");
var dbConfig = require("./dbConfig.js");

oracledb.getConnection({
  user: dbConfig.user,
  password: dbConfig.password,
  connectString: dbConfig.connectString,
})
.then(async (conn) => {
  console.log("Oracle DB 연결 성공!!");

  try {
    // Create ART table
    let sql = `CREATE TABLE ART (
      ARTID VARCHAR2(50),
      TITLE VARCHAR2(50),
      ARTIST VARCHAR2(50)
    )`;
    await conn.execute(sql);

    sql = "ALTER TABLE art ADD PRIMARY KEY(artid)";
    await conn.execute(sql);

    // Create MYUSER table
    sql = `CREATE TABLE MYUSER (
      ID VARCHAR2(20),
      PASSWORD VARCHAR2(20),
      NAME VARCHAR2(50),
      BIRTHDAY DATE
    )`;
    await conn.execute(sql);

    sql = "ALTER TABLE myuser ADD PRIMARY KEY(id)";
    await conn.execute(sql);

    // Create COMMENTS table
    sql = `CREATE TABLE COMMENTS (
      COMID VARCHAR2(50),
      ID VARCHAR2(50),
      ARTID VARCHAR2(50),
      COMCONTENTS VARCHAR2(50)
    )`;
    await conn.execute(sql);

    sql = "ALTER TABLE comments ADD PRIMARY KEY(comid)";
    await conn.execute(sql);

    sql = `ALTER TABLE comments ADD FOREIGN KEY(id) REFERENCES myuser(id)`;
    await conn.execute(sql);

    sql = `ALTER TABLE comments ADD FOREIGN KEY(artid) REFERENCES art(artid)`;
    await conn.execute(sql);

    // Create SEARCH table
    sql = `CREATE TABLE SEARCH (
      SEARID VARCHAR2(100),
      SEARCONTENTS VARCHAR2(100)
    )`;
    await conn.execute(sql);

    sql = "ALTER TABLE search ADD PRIMARY KEY(searid)";
    await conn.execute(sql);

    console.log("테이블 생성 및 관계 설정 완료!!");
  } catch (err) {
    console.error("에러:", err);
  } finally {
    if (conn) {
      await conn.close();
    }
  }
})
.catch((err) => {
  console.error("연결 에러:", err);
});
