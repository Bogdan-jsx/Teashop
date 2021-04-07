import { Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Product from "./product";
import Order from "./order";

export interface ProductOrderAttr {
    productId: string,
    orderId: string,
    price: number,
    weight: number,
    id: string,
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
    
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        allowNull: false,
        unique: true,
        defaultValue: DataType.UUIDV4,
    })
    id!: string;
}

export default ProductOrder;