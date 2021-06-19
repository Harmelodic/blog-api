import postRepository from './repository.js';

const service = {};

service.fetchAll = async () => {
	return postRepository.fetchAll();
};

service.fetchById = (id) => {
	return postRepository.fetchById(id);
};

export default service;
