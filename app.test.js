const request = require('supertest');
const app = require('./app');

test('I am alive and responding', done => {
    request(app)
    .get('/')
    .expect(200)
    .end(done)
});

test('GET /', done => {
    request(app)
    .get('/about')
    .expect(200)
    .end(done)
});

test('GET /users', done => {
    request(app)
    .get('/users')
    .expect(200)
    .end(done)
});

test('GET jibberish', done => {
    request(app)
    .get('/asjdgajdsg')
    .expect(404)
    .end(done)
});