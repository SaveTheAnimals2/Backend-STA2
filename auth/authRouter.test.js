const request = require('supertest');
const server = require('../api/server.js');

describe('auth/register', function() {
    it('should return a status code 201', function() {
        return request(server)
            .post('/api/auth/register')
            .send({
                username: `${Date.now()}`,
                password: `${Date.now()}`,
                email: `${Date.now()}`,
                organizationName: `${Date.now()}`
               }) 
               .then(res => {
                   expect(res.status).toBe(201);      
        })
    })
    it ('is a json object', function() {
        return request(server)
            .post('/api/auth/register')
            .send({ username: "Mufasa", password: "kingdom", email: `${Date.now()}`,
                    organizationName: `${Date.now()}`})
            .then(res => {
                expect(res.type).toMatch(/json/i)
            });
        });


describe('/auth/login', function() {
    it ('should return a 200 status code', function() {
        return request(server)
            .post('/api/auth/login')
            .send({ 
                username: 'Mufasa', 
                password: 'kingdom'})
            .then(res => {
                expect(res.status).toBe(200);
            })
        })
        
    it ('is a json object', function() {
        return request(server)
            .post('/api/auth/login')
            .send({ 
                username: 'Mufasa', 
                password: 'kingdom'})
            .then(res => {
                expect(res.type).toMatch(/json/i)
            });
        });

    });

})