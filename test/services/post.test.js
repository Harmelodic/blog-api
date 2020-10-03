import postService from '../../src/services/post';

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

jest.mock('../../src/repositories/post', () => ({
  fetchPosts: () => {
    return new Promise((resolve, reject) => {
      resolve(mockData);
    });
  },
  fetchPost: (id) => {
    return new Promise((resolve, reject) => {
      resolve(mockData.find((data) => data.id === id));
    });
  },
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
