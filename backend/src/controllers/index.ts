import { Express } from "express";
import productController from "./productsController";
import subCategoryController from "./subCategoryController";
import categoryController from "./categoryController";
import orderController from "./orderController";
import productOrderController from "./productOrderController";
import imageController from "./imageController";

export default function configControllers(app: Express) {
    app.use("/product", productController);
    app.use("/subCategory", subCategoryController);
    app.use("/category", categoryController);
    app.use("/order", orderController);
    app.use("/productOrder", productOrderController);
    app.use("/image", imageController);
}