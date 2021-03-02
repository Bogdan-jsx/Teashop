import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import Product  from "./product";

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