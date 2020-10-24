import { sql } from '@harmelodic/interfaces';
import config from '../config.js';

const databaseConnection = sql({
  socketPath: config.db.socketPath,
  database: config.db.database,
  user: config.db.user,
  password: config.db.password,
  connectionLimit: config.db.connectionLimit,
});

const repository = {};

repository.fetchAll = async () => {
  const categorySet = await databaseConnection
      .query('SELECT DISTINCT category FROM posts ORDER BY category ASC');

  return categorySet.map((entry) => entry.category);
};

export default repository;
