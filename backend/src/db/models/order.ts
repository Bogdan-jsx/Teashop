import { Column, DataType, ForeignKey, Model, PrimaryKey, Table, } from "sequelize-typescript";
import Status from "./status";

export enum Statuses {
    inProcessing = "In processing",
    confirmed = "Confirmed",
    rejected = "Rejected",
    inDelivery = "In delivery",
    completed = "Completed",
}

export interface OrderAttr {
    name: string,
    phone: string,
    address: string,
    comment?: string,
    id: string,
    status: string,
}

@Table
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
    comment?: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    status!: string;
}

export default Order;