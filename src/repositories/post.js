import posts from '../data/posts.json';

const repository = {};

repository.fetchPosts = async () => {
  return posts;
};

repository.fetchPost = async (id) => {
  return posts.find((post) => post.datePosted === id);
};

export default repository;
