import {sql} from '@harmelodic/interfaces';
import fetch from 'node-fetch';
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
  return await databaseConnection
      .query('SELECT * FROM posts ORDER BY datePosted DESC');
};

repository.fetchById = async (id) => {
  return await databaseConnection
      .query(`SELECT * FROM posts WHERE datePosted=${id}`);
};

repository.fetchPosts = async () => {
  return (await fetch(`${config.contentURI}/posts.json`)).json();
};

repository.fetchPost = async (id) => {
  const posts = await (await fetch(`${config.contentURI}/posts.json`)).json();
  return posts.find((post) => post.datePosted === id);
};

export default repository;
