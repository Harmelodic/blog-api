import request from 'supertest';
import app from '../../src/app';

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

jest.mock('../../src/services/post', () => ({
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

describe('Router tests - /api', () => {
  it('/api/posts returns posts', () => {
    request(app)
        .get('/api/posts')
        .expect('Access-Control-Allow-Origin', '*')
        .expect('Content-Type', /json/)
        .expect('Content-Length', JSON.stringify(mockData).length.toString())
        .expect(200)
        .end((err) => {
          if (err) throw err;
        });
  });

  it('/api/posts returns single post', () => {
    request(app)
        .get('/api/posts/0')
        .expect('Access-Control-Allow-Origin', '*')
        .expect('Content-Type', /json/)
        .expect('Content-Length',
            JSON.stringify(mockData.find((data) => data.id === 0))
                .length
                .toString())
        .expect(200)
        .end((err) => {
          if (err) throw err;
        });
  });
});
