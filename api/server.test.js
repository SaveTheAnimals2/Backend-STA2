const request = require('supertest');

const server = require('./server.js');

describe('server', function() {
    it('runs the test', function() {
        expect(true).toBe(true);
    })

    describe('GET /', function() {
        it('should return 200 OK', function() {
            // make a GET request to //
            return request(server).get('/')
                   .then(res => {
                    // check that it's working //
                    expect(res.status).toBe(200);
            })
        })

        it('should return JSON', function() {
            // make a GET request to //
            return request(server).get('/')
                   .then(res => {
                    // check that it's working //
                    expect(res.type).toMatch(/json/i);
            })   
        })
    })
})
