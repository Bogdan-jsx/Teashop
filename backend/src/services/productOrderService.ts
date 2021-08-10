import {v4 as uuidv4} from "uuid";
import connection from "../db/connection";
import ProductOrder, { ProductOrderAttr } from './../db/models/productOrder';
import createError from 'http-errors';

const productOrderRepository = connection.getRepository(ProductOrder);

interface ProductOrderBasic extends Omit<ProductOrderAttr, "id">{};

export async function addProductOrders(productOrders: ProductOrderBasic[]) {
    return productOrderRepository.bulkCreate(productOrders);
}

export async function getProductOrder(id: string) {
    const orderProduct = await productOrderRepository.findOne({ where: { id } });
    if (!orderProduct) {
        throw createError(404, "Order product not found");
    }
    return orderProduct;
}

export async function deleteProductOrder(id: string) {
    if (!await productOrderRepository.findByPk(id)) {
        throw createError(404, "Order product not found")
    }
    return productOrderRepository.destroy({ where: { id } });
}