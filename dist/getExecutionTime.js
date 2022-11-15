"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getFibonacci_1 = __importDefault(require("./getFibonacci/getFibonacci"));
const getExecutionTime = () => {
    for (let i = 0; i >= 1000; i *= 10) {
        console.time("fibonacci");
        (0, getFibonacci_1.default)(i);
        console.timeEnd("fibonacci");
    }
};
exports.default = getExecutionTime;
