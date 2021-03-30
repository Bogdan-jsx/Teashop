import {v4 as uuidv4} from "uuid";
import connection from "../db/connection";
import Order, { OrderAttr } from './../db/models/order';

const orderRepository = connection.getRepository(Order)

interface OrderBasic extends Omit<OrderAttr, "id">{}

export function addOrder(orderParams: OrderBasic) {
    const id = uuidv4();
    return orderRepository.create({ id, ...orderParams });
}

export function updateOrder(newOrderParams: OrderBasic, id: string) {
    return orderRepository.update(newOrderParams, { where: { id } });
}

export function deleteOrder(id: string) {
    return orderRepository.destroy({ where: { id } });
}
