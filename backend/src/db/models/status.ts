import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

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