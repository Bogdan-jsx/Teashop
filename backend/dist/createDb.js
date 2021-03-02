"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var promise_1 = __importDefault(require("mysql2/promise"));
var _a = process.env, DB_NAME = _a.DB_NAME, MYSQL_USER = _a.MYSQL_USER, MYSQL_PASSWORD = _a.MYSQL_PASSWORD, DB_HOST = _a.DB_HOST, MYSQL_PORT = _a.MYSQL_PORT;
exports.default = promise_1.default.createConnection({
    host: DB_HOST,
    port: +MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
}).then(function (connection) {
    connection.query("CREATE DATABASE IF NOT EXISTS " + DB_NAME + ";").then(function () {
        console.info("Database create or successfully checked");
    });
});
