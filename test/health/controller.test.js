import request from 'supertest';
import app from '../../src/app.js';

describe('Router tests - /health', () => {
  it('/health returns OK', () => {
    request(app)
        .get('/health')
        .expect('Access-Control-Allow-Origin', '*')
        .expect('Content-Type', /json/)
        .expect('Content-Length',
            JSON.stringify({ status: 'OK' }).length.toString())
        .expect(200)
        .end((err) => {
          if (err) throw err;
        });
  });
});
