"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_config_1 = require("jest-config");
const config = {
    moduleFileExtensions: [...jest_config_1.defaults.moduleFileExtensions, "mts"],
    transform: {},
    testEnvironment: "jest-environment-node",
};
exports.default = config;
