const { Sequelize, DataTypes } = require("sequelize");
const { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } = require("sequelize-typescript");
const { Product } = require("./product");
const { Order } = require("./order");
const sequelize = new Sequelize("Teashop", "TeashopAdmin", "6def3656DEF3656", {
    dialect: "mssql",
    host: "localhost",
    port: "1433"
});

interface ProductOrderAttr {
    productId: string,
    orderId: string,
    price: number,
    weight: number,
}

@Table
class ProductOrder extends Model implements ProductOrderAttr {
    @ForeignKey(() => Product)
    productId!: string;
    
    @ForeignKey(() => Order)
    orderId!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    price!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    weight!: number;
}

export default ProductOrder;