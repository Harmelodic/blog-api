import request from 'supertest';
import app from '../../src/app';

const mockData = [
  'Category 1',
  'Category 2',
];

jest.mock('../../src/category/service', () => ({
  fetchAll: async () => mockData,
}));

describe('Router tests - /category', () => {
  it('/ returns posts', () => {
    request(app)
        .get('/category')
        .expect('Access-Control-Allow-Origin', '*')
        .expect('Content-Type', /json/)
        .expect('Content-Length', JSON.stringify(mockData).length.toString())
        .expect(200)
        .end((err) => {
          if (err) throw err;
        });
  });
});
