import postService from '../../src/post/service.js';

const mockData = [
	{
		id: 0,
		title: 'Post 1',
	},
	{
		id: 1,
		title: 'Post 2',
	},
];

jest.mock('../../src/post/repository.js', () => ({
	fetchAll: async () => mockData,
	fetchById: async id => mockData.find(data => data.id === id),
}));

describe('Post Service Tests', () => {
	it('returns all posts', () => {
		postService.fetchAll().then((received) => {
			expect(received).toEqual(mockData);
		});
	});

	it('returns correct individual posts', () => {
		postService.fetchById(0).then((received) => {
			expect(received).toEqual(mockData.find(data => data.id === 0));
		});
	});
});
