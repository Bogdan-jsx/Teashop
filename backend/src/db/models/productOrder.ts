import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import Product from "./product";
import Order from "./order";

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