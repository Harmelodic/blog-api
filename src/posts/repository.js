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

repository.fetchPosts = async () => {
  const dbPosts = await databaseConnection
      .query('SELECT * FROM posts ORDER BY datePosted DESC');
  console.log(JSON.stringify(dbPosts));

  return (await fetch(`${config.contentURI}/posts.json`)).json();
};

repository.fetchPost = async (id) => {
  const posts = await (await fetch(`${config.contentURI}/posts.json`)).json();
  return posts.find((post) => post.datePosted === id);
};

export default repository;
