import { Sequelize } from "sequelize-typescript";
import Category from "./models/category";
import Image from "./models/image";
import Order from "./models/order";
import Product from "./models/product";
import ProductOrder from "./models/productOrder";
// import Status from "./models/status";
import SubCategory from "./models/subCategory";

const {DB_NAME, MYSQL_USER, MYSQL_PASSWORD, DB_HOST} = process.env;

const sequelize = new Sequelize(DB_NAME as string, MYSQL_USER as string, MYSQL_PASSWORD, {
    dialect: 'mysql',
    host: DB_HOST,
    repositoryMode: true,
});

sequelize.addModels([
    SubCategory,
    Category,
    Image,
    Product,
    ProductOrder,
    Order,
    // Status,
]);

export default sequelize;