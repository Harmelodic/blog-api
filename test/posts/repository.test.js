import postRepository from '../../src/posts/repository';

postRepository.fetchPostDb = jest.fn();

describe('post repository', () => {
  it('should return the posts', async () => {
    const posts = await postRepository.fetchPosts();
    expect(posts.length).toBeGreaterThan(1);
  });

  it('should return single post', async () => {
    const post = await postRepository.fetchPost(1532228220000);
    expect(post.title).toEqual('Films I\'ve Seen');
    expect(post.datePosted).toEqual(1532228220000);
  });
});
