import {sql} from '@harmelodic/interfaces';
import config from '../config';

const databaseConnection = sql({
  socketPath: config.db.socketPath,
  database: config.db.database,
  user: config.db.user,
  password: config.db.password,
  connectionLimit: config.db.connectionLimit,
});

const repository = {};

repository.fetchAll = async () => {
  return databaseConnection
      .query('SELECT * FROM posts ORDER BY datePosted DESC');
};

repository.fetchById = async (id) => {
  const posts = await databaseConnection
      .query(`SELECT * FROM posts WHERE datePosted=${id}`);
  return posts[0];
};

export default repository;
