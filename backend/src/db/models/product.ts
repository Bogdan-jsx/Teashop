import { Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import SubCategory from "./subCategory";

export interface ProductAttr {
    name: string,
    price: number,
    discount: number,
    vendorCode: number,
    effect: string,
    appearance: string,
    brew: string,
    taste: string,
    weight: number,
    subCategoryId: string,
    id: string,
}

@Table
class Product extends Model implements ProductAttr {
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
        type: DataType.INTEGER,
        allowNull: false,
    })
    price!: number;

    @Column({
        type: DataType.INTEGER,
    })
    discount!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    vendorCode!: number;

    @Column({
        type: DataType.STRING,
    })
    effect!: string;

    @Column({
        type: DataType.STRING,
    })
    appearance!: string;

    @Column({
        type: DataType.STRING,
    })
    brew!: string;

    @Column({
        type: DataType.STRING,
    })
    taste!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    weight!: number;

    @ForeignKey(() => SubCategory)
    subCategoryId!: string;
}

export default Product;