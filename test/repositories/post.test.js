import postRepository from '../../src/repositories/post';

describe('post repository', () => {
  it('should return the posts', () => {
    postRepository.fetchPosts().then((posts) => {
      expect(posts.length).toBeGreaterThan(1);
    });
  });

  it('should return single post', () => {
    postRepository.fetchPost(1532228220000).then((post) => {
      expect(post.title).toEqual('Films I\'ve Seen');
      expect(post.datePosted).toEqual(1532228220000);
    });
  });
});
