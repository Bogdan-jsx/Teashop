import {v4 as uuidv4} from "uuid";
import connection from "../db/connection";
import ProductOrder, { ProductOrderAttr } from './../db/models/productOrder';

const productOrderRepository = connection.getRepository(ProductOrder);

interface ProductOrderBasic extends Omit<ProductOrderAttr, "id">{};

export async function addProductOrder(productOrder: ProductOrderBasic) {
    console.log(productOrder);
    return productOrderRepository.create(productOrder)
}

export async function getProductOrder(id: string) {
    return productOrderRepository.findOne({ where: { id } });
}

export async function deleteProductOrder(id: string) {
    return productOrderRepository.destroy({ where: { id } });
}