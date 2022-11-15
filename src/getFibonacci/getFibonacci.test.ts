import getFibonacci from "./getFibonacci";

describe("Given the getFibonacci function", () => {
  describe("When it is called with 6", () => {
    test("Then it should return 8", () => {
      const result = getFibonacci(6);
      expect(result).toBe(8);
    });
  });
});
