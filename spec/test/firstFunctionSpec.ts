// declare function require(name:string);
// const firstFunction = require('../../src/controller/firstFunction');

// import firstFunction = require('../../src/controller/firstFunction');
// import * as firstFunction from '../../src/controller/firstFunction';
import firstFunction from '../../src/controller/firstFunction';

describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
        // expect(2).toBe(firstFunction.default(1, 1));
        // expect(2).toBe(firstFunction(1, 1));
    });
});