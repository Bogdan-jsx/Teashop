"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_typescript_1 = require("sequelize-typescript");
var category_1 = __importDefault(require("./models/category"));
var _a = process.env, DB_NAME = _a.DB_NAME, MYSQL_USER = _a.MYSQL_USER, MYSQL_PASSWORD = _a.MYSQL_PASSWORD, DB_HOST = _a.DB_HOST;
var sequelize = new sequelize_typescript_1.Sequelize(DB_NAME, MYSQL_USER, MYSQL_PASSWORD, {
    dialect: 'mysql',
    host: DB_HOST,
    repositoryMode: true,
});
sequelize.addModels([
    category_1.default,
]);
exports.default = sequelize;
