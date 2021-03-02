const { Sequelize, DataTypes } = require("sequelize");
const { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } = require("sequelize-typescript");
const sequelize = new Sequelize("Teashop", "TeashopAdmin", "6def3656DEF3656", {
    dialect: "mssql",
    host: "localhost",
    port: "1433"
});

interface StatusAttr {
    name: string,
    id: string,
}

@Table
class Status extends Model implements StatusAttr {
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
}

export default Status;