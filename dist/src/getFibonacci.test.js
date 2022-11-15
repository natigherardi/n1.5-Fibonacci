"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getFibonacci_1 = __importDefault(require("./getFibonacci"));
describe("", () => {
    test("", () => {
        const result = (0, getFibonacci_1.default)(0);
        expect(result).toBe(0);
    });
});
