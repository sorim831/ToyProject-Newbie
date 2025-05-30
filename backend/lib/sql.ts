const sql: { [key: string]: string } = {
  insertOfficer: `INSERT INTO officers (name, m_rank) VALUES (?, ?)`,
  getOfficers: `SELECT * FROM officers`,
  updateOfficer: `UPDATE officers SET name = ?, m_rank = ? WHERE id = ?`,
};

export default sql;
