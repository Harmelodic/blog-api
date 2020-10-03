import postRepository from '../repositories/post';

const service = {};

service.fetchPosts = () => {
  return new Promise((resolve, reject) => {
    postRepository.fetchPosts()
        .then((posts) => {
          resolve(posts);
        });
  });
};

service.fetchPost = (id) => {
  return new Promise((resolve, reject) => {
    postRepository.fetchPost(id)
        .then((post) => {
          resolve(post);
        });
  });
};

export default service;
