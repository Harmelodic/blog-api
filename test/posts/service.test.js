import postService from '../../src/posts/service';

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

jest.mock('../../src/posts/repository', () => ({
  fetchPosts: async () => mockData,
  fetchPost: async (id) => mockData.find((data) => data.id === id),
}));

describe('testSubject tests', () => {
  it('returns posts from repo', () => {
    postService.fetchPosts().then((received) => {
      expect(received).toEqual(mockData);
    });
  });

  it('returns posts from repo', () => {
    postService.fetchPost(0).then((received) => {
      expect(received).toEqual(mockData.find((data) => data.id === 0));
    });
  });
});
