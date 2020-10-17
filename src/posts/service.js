import postRepository from './repository';

const service = {};

service.fetchPosts = async () => {
  return postRepository.fetchAll();
};

service.fetchPost = (id) => {
  return postRepository.fetchById(id);
};

export default service;
