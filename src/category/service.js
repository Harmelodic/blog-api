import categoryRepository from './repository.js';

const service = {};

service.fetchAll = async () => {
  return categoryRepository.fetchAll();
};

export default service;
