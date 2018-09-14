let chai = require('chai');
let assert = chai.assert;
let validateAddress = require('./app.js');

describe("Write a function to determine wheter it is a valid IP address", ()=> {
    it("should return true when it receives a valid ip address", ()=> {
        assert.equal(validateAddress('3.89.230.0'), true)
    })
})