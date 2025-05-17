const sql: { [key: string]: string } = {
  insertOfficer: `INSERT INTO officers (name, m_rank) VALUES (?, ?)`,
  getOfficers: `SELECT * FROM officers`,
  // 필요 시 다른 쿼리도 추가
};

export default sql;
