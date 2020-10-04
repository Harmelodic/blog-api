import postRepository from './repository';

const service = {};

service.fetchPosts = async () => {
  return postRepository.fetchPosts();
};

service.fetchPost = (id) => {
  return postRepository.fetchPost(id);
};

export default service;
