const { Sequelize, DataTypes } = require("sequelize");
const { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } = require("sequelize-typescript");
const { Category } = require("./category");

interface SubCategoryAttr {
    name: string,
    alias: string,
    id: string,
    categoryId: string,
}

@Table
class SubCategory extends Model implements SubCategoryAttr {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        allowNull: false,
        unique: true,
        defaultValue: DataType.UUIDV4,
    })
    id!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    alias!: string;

    @ForeignKey(() => Category)
    categoryId!: string;
}

export default SubCategory;