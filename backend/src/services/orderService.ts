import {v4 as uuidv4} from "uuid";
import connection from "../db/connection";
import Order, { OrderAttr } from './../db/models/order';
import createError from "http-errors";

const orderRepository = connection.getRepository(Order)

interface OrderBasic extends Omit<OrderAttr, "id">{}

export async function addOrder(orderParams: OrderBasic) {
    const id = uuidv4();
    return orderRepository.create({ id, ...orderParams });
}

export async function getOrder(id: string) {
    const order = await orderRepository.findOne({ where: { id } });
    if (!order) {
        throw createError(404, "Order not found");
    }
    return order;
}

export async function updateOrder(newOrderParams: OrderBasic, id: string) {
    if (!await orderRepository.findByPk(id)) {
        throw createError(404, "Order not found")
    }
    await orderRepository.update(newOrderParams, { where: { id } });
    return orderRepository.findByPk(id);
}

export async function deleteOrder(id: string) {
    if (!await orderRepository.findByPk(id)) {
        throw createError(404, "Order not found")
    }
    return orderRepository.destroy({ where: { id } });
}
