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
var Sequelize = require("sequelize").Sequelize;
var _a = require("sequelize-typescript"), BelongsTo = _a.BelongsTo, Column = _a.Column, DataType = _a.DataType, ForeignKey = _a.ForeignKey, HasMany = _a.HasMany, Model = _a.Model, PrimaryKey = _a.PrimaryKey, Table = _a.Table;
var SubCategory = require("./subCategory").SubCategory;
var sequelize = new Sequelize("Teashop", "TeashopAdmin", "6def3656DEF3656", {
    dialect: "mssql",
    host: "localhost",
    port: "1433"
});
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
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
    ], Product.prototype, "id", void 0);
    __decorate([
        Column({
            type: DataType.STRING,
            allowNull: false,
        })
    ], Product.prototype, "name", void 0);
    __decorate([
        Column({
            type: DataType.INTEGER,
            allowNull: false,
        })
    ], Product.prototype, "price", void 0);
    __decorate([
        Column({
            type: DataType.INTEGER,
        })
    ], Product.prototype, "discount", void 0);
    __decorate([
        Column({
            type: DataType.INTEGER,
            allowNull: false,
        })
    ], Product.prototype, "vendorCode", void 0);
    __decorate([
        Column({
            type: DataType.STRING,
        })
    ], Product.prototype, "effect", void 0);
    __decorate([
        Column({
            type: DataType.STRING,
        })
    ], Product.prototype, "appearance", void 0);
    __decorate([
        Column({
            type: DataType.STRING,
        })
    ], Product.prototype, "brew", void 0);
    __decorate([
        Column({
            type: DataType.STRING,
        })
    ], Product.prototype, "taste", void 0);
    __decorate([
        Column({
            type: DataType.INTEGER,
            allowNull: false,
        })
    ], Product.prototype, "weight", void 0);
    __decorate([
        ForeignKey(function () { return SubCategory; })
    ], Product.prototype, "subCategoryId", void 0);
    Product = __decorate([
        Table
    ], Product);
    return Product;
}(Model));
exports.default = Product;
