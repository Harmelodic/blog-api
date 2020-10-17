import categoryRepository from './repository';

const service = {};

service.fetchAll = async () => {
  return categoryRepository.fetchAll();
};

export default service;
