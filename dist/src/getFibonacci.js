"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getFibonacci = (number) => {
    if (number <= 1) {
        return number;
    }
    let secondLastNumber = 0;
    let resultNumber;
    let lastNumber = 1;
    for (let i = 2; i <= number; i++) {
        resultNumber = secondLastNumber + lastNumber;
        secondLastNumber = lastNumber;
        lastNumber = resultNumber;
    }
    return resultNumber;
};
exports.default = getFibonacci;
