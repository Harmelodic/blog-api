import fetch from 'node-fetch';

const repository = {};

repository.fetchPosts = async () => {
  return (await fetch('https://harmelodic.gitlab.io/scribbles-content/posts.json')).json();
};

repository.fetchPost = async (id) => {
  const posts = await (await fetch('https://harmelodic.gitlab.io/scribbles-content/posts.json')).json();
  return posts.find((post) => post.datePosted === id);
};

export default repository;
