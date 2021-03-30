import { Express } from "express";
import productController from "./productsController";
import subCategoryController from "./subCategoryController";
import categoryController from "./categoryController";
import statusController from "./statusController";
import orderController from "./orderController";

export default function configControllers(app: Express) {
    app.use("/product", productController);
    app.use("/subCategory", subCategoryController);
    app.use("/category", categoryController);
    app.use("/status", statusController);
    app.use("/order", orderController);
}