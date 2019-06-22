var assert = require('chai').assert;
var balanceParenthesis = require('../index.js');

var testCases = ["()()", "(())", "()))"];

describe("it should return true for parenthesis with proper opening & closing", function() {
    it("should work", function() {
        assert.equal(balanceParenthesis(testCases[0]), true);
    })
    it("should work", function() {
        assert.equal(balanceParenthesis(testCases[1]), true);
    })
    it("should work", function() {
        assert.equal(balanceParenthesis(testCases[2]), false);
    })
})