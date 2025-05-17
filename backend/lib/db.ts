import * as mysql from 'mysql2';
import * as dotenv from 'dotenv';
import sql from './sql'; // sql.js는 TS에 맞게 export 되어야 함

dotenv.config({ path: '.env' });

const pool = mysql.createPool({
  connectionLimit: parseInt(process.env.MYSQL_LIMIT || '10', 10),
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306', 10),
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

const query = async (alias: string, values?: any[]) => {
  return new Promise((resolve, reject) => {
    pool.query(sql[alias], values, (error, results) => {
      if (error) {
        console.error(error);
        reject({ error });
      } else {
        resolve(results);
      }
    });
  });
};

export default {
  query,
};
