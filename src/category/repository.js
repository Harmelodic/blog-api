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
  return databaseConnection.query('SELECT DISTINCT category FROM posts');
};

export default repository;
