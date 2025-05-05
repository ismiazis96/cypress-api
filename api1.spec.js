const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

let statusCode = 200;
let failedStatus = 400;

describe('Hit api login', () => {
    context('Login success', () => {
        it('status code 200', () => {
            // console.log(statusCode);
            // expect(expected).to.eq(expected)
            expect(statusCode).to.eq(200);
        });

        it('hit failed', () => {
            console.log(failedStatus);
        });
    });
});