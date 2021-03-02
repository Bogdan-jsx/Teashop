const { Sequelize } = require("sequelize");
const { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } = require("sequelize-typescript");
const { Product } = require("./product");
const sequelize = new Sequelize("Teashop", "TeashopAdmin", "6def3656DEF3656", {
    dialect: "mssql",
    host: "localhost",
    port: "1433"
});

interface ImageAttr {
    link: string,
    productId: string,
}

@Table
class ImageTable extends Model implements ImageAttr {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    link!: string;

    @ForeignKey(() => Product)
    productId!: string;
}

export default ImageTable;