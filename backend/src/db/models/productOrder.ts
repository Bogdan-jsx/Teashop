import { Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Product from "./product";
import Order from "./order";

export interface ProductOrderAttr {
    productId: string,
    orderId: string,
    price: number,
    weight: number,
}

@Table
class ProductOrder extends Model implements ProductOrderAttr {
    @ForeignKey(() => Product)
    @PrimaryKey
    @Column({
        allowNull: false,
        type: DataType.UUID,
    })
    productId!: string;
    
    @ForeignKey(() => Order)
    @PrimaryKey
    @Column({
        allowNull: false,
        type: DataType.UUID,
    })
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