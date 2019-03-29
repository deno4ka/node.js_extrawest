import firstFunction from "./firstFunction";

describe("Test 1 + 1 = 2", () => {
    it("contains spec with an expectation", () => {
        // expect(true).toBe(true);
        expect(2).toBe(firstFunction(1, 1));
        expect(4).toBe(firstFunction(2, 2));
    });
});
