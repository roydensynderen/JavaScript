const assert = require('chai').assert;

const twoSum = require('../index.js');

const testCases = [
    {
        arr: [1, 2, 3],
        target: 4
    },
    {
        arr: [2, 8 ,3, 7],
        target: 10
    }
];

describe("Testing twoSum function", () => {
    it("should return [0, 2]", () => {
        assert.deepEqual(twoSum(testCases[0].arr, testCases[0].target), [0, 2]);
    })
    it("should return [0, 1]", () => {
        assert.deepEqual(twoSum(testCases[1].arr, testCases[1].target), [0, 1]);
    })
});