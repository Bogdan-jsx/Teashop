import { Sequelize } from "sequelize-typescript";
import { Category } from "./models/category";

const {DB_NAME, MYSQL_USER, MYSQL_PASSWORD, DB_HOST} = process.env;

const sequelize = new Sequelize(DB_NAME as string, MYSQL_USER as string, MYSQL_PASSWORD, {
    dialect: 'mysql',
    host: DB_HOST,
    repositoryMode: true,
});

sequelize.addModels([
    Category,
    // Image,
    // Order,
    // Product,
    // ProductOrder,
    // Status,
    // SubCategory,
]);

export default sequelize;