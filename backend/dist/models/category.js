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
var _a = require("sequelize-typescript"), Column = _a.Column, DataType = _a.DataType, Model = _a.Model, PrimaryKey = _a.PrimaryKey, Table = _a.Table;
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        PrimaryKey,
        Column({
            type: DataType.UUID,
            allowNull: false,
            unique: true,
            defaultValue: DataType.UUIDV4
        })
    ], Category.prototype, "id", void 0);
    __decorate([
        Column({
            type: DataType.STRING,
            allowNull: false,
        })
    ], Category.prototype, "name", void 0);
    __decorate([
        Column({
            type: DataType.STRING,
            allowNull: false,
        })
    ], Category.prototype, "alias", void 0);
    Category = __decorate([
        Table
    ], Category);
    return Category;
}(Model));
exports.default = Category;
