import { Column, DataType, Model, PrimaryKey, Table, HasMany } from "sequelize-typescript";
import SubCategory from "./subCategory";

export interface CategoryAttr {
    name: string,
    alias: string,
    id: string,
}

@Table
class Category extends Model implements CategoryAttr {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        allowNull: false,
        unique: true,
        defaultValue: DataType.UUIDV4
    })
    id!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    alias!: string;

    @HasMany(() => SubCategory, {onDelete: "cascade"})
    subCategories!: SubCategory[];
}

export default Category;