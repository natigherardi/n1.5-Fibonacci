"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getFibonacci_1 = __importDefault(require("./getFibonacci/getFibonacci"));
const getExecutionTime = () => {
    const results = [];
    for (let i = 1; i <= 1000000; i *= 10) {
        const start = process.hrtime();
        (0, getFibonacci_1.default)(i);
        const resultTime = process.hrtime(start);
        results.push({ number: i, time: resultTime[1] });
    }
    console.log(results);
};
getExecutionTime();
