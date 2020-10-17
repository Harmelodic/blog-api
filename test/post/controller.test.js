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

jest.mock('../../src/post/service', () => ({
  fetchAll: async () => mockData,
  fetchById: async (id) => mockData.find((data) => data.id === id),
}));

describe('Router tests - /post', () => {
  it('/ returns all posts', () => {
    request(app)
        .get('/posts')
        .expect('Access-Control-Allow-Origin', '*')
        .expect('Content-Type', /json/)
        .expect('Content-Length', JSON.stringify(mockData).length.toString())
        .expect(200)
        .end((err) => {
          if (err) throw err;
        });
  });

  it('/:id returns correct single post', () => {
    request(app)
        .get('/posts/0')
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
