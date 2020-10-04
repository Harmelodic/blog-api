import fetch from 'node-fetch';
import config from '../config';

const repository = {};

repository.fetchPosts = async () => {
  return (await fetch(`${config.contentURI}/posts.json`)).json();
};

repository.fetchPost = async (id) => {
  const posts = await (await fetch(`${config.contentURI}/posts.json`)).json();
  return posts.find((post) => post.datePosted === id);
};

export default repository;
