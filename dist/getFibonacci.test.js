"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getFibonacci_1 = __importDefault(require("./getFibonacci"));
describe("Given the getFibonacci function", () => {
    describe("When it is called with 6", () => {
        test("Then it should return 8", () => {
            const result = (0, getFibonacci_1.default)(6);
            expect(result).toBe(8);
        });
    });
});
