import { Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Product  from "./product";

interface ImageAttr {
    productId: string,
    id: string,
    data: Buffer,
    size: string,
    type: string,
    name: string,
}

@Table
class Image extends Model implements ImageAttr {
    @ForeignKey(() => Product)
    productId!: string;

    @PrimaryKey
    @Column({
        type: DataType.UUID,
        allowNull: false,
        unique: true,
        defaultValue: DataType.UUIDV4,
    })
    id!: string;
    
    @Column({
        type: DataType.BLOB,
        allowNull: false
    })
    data!: Buffer;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    size!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    type!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;
}

export default Image;