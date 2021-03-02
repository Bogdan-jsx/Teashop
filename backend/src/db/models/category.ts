const { Column, DataType, Model, PrimaryKey, Table } = require("sequelize-typescript");

interface CategoryAttr {
    name: string,
    alias: string,
    id: string,
}

@Table
export class Category extends Model implements CategoryAttr {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        allowNull: false,
        unique: true,
        defaultValue: DataType.UUIDV4
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
}
