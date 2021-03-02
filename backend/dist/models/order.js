"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require("sequelize"), Sequelize = _a.Sequelize, DataTypes = _a.DataTypes;
var _b = require("sequelize-typescript"), BelongsTo = _b.BelongsTo, Column = _b.Column, DataType = _b.DataType, ForeignKey = _b.ForeignKey, HasMany = _b.HasMany, Model = _b.Model, PrimaryKey = _b.PrimaryKey, Table = _b.Table;
var Status = require("./status").Status;
var sequelize = new Sequelize("Teashop", "TeashopAdmin", "6def3656DEF3656", {
    dialect: "mssql",
    host: "localhost",
    port: "1433"
});
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        PrimaryKey,
        Column({
            type: DataType.UUID,
            allowNull: false,
            unique: true,
            defaultValue: DataType.UUIDV4,
        })
    ], Order.prototype, "id", void 0);
    __decorate([
        Column({
            type: DataType.STRING,
            allowNull: false,
        })
    ], Order.prototype, "name", void 0);
    __decorate([
        Column({
            type: DataType.STRING,
            allowNull: false,
        })
    ], Order.prototype, "phone", void 0);
    __decorate([
        Column({
            type: DataType.STRING,
            allowNull: false,
        })
    ], Order.prototype, "address", void 0);
    __decorate([
        Column({
            type: DataType.STRING,
        })
    ], Order.prototype, "comment", void 0);
    __decorate([
        ForeignKey(function () { return Status; })
    ], Order.prototype, "status", void 0);
    return Order;
}(Model));
exports.default = Order;
