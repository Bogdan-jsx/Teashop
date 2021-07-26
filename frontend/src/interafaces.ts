export interface Product {
    name: string,
    vendorCode: string,
    price: number,
    discount: number,
    effect: string,
    appearance: string,
    brew: string,
    taste: string
    images: Array<string>,
    id: string,
    subCategoryId: string,
    weight: number,
    type: string,
}

export interface Subcategory {
    name: string,
    alias: string,
    id: string,
}

export interface CatalogCategory {
    name: string,
    subCategories: Array<Subcategory>,
    id: string,
}

export interface SectionAttr {
    name: string,
    count: number,
    products: Product[],
    id: string,
}

export interface BasketProductBasic {
    id: string,
    weight: number,
}