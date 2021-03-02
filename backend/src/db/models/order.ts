const { Sequelize, DataTypes } = require("sequelize");
const { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } = require("sequelize-typescript");
const { Status } = require("./status");
const sequelize = new Sequelize("Teashop", "TeashopAdmin", "6def3656DEF3656", {
    dialect: "mssql",
    host: "localhost",
    port: "1433"
});

interface OrderAttr {
    name: string,
    phone: string,
    address: string,
    comment: string,
    id: string,
    status: string,
}

class Order extends Model implements OrderAttr {
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
    phone!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address!: string;

    @Column({
        type: DataType.STRING,
    })
    comment!: string;

    @ForeignKey(() => Status)
    status!: string;
}

export default Order;