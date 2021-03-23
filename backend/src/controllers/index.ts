import { Express } from "express";
import productController from "./productsController";
import subCategoryController from "./subCategoryController";
import categoryController from "./categoryController";

export default function configControllers(app: Express) {
    app.use("/product", productController);
    app.use("/subCategory", subCategoryController);
    app.use("/category", categoryController);
}