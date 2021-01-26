import React from "react";

interface Subcategory {
    name: string,
    link: string,
}

interface CatalogCategory {
    name: string,
    subcategories: Array<Subcategory>,
}

export const AllProductsCatalog: React.FC = () => {
    const categories: Array<CatalogCategory> = [
        {
            name: "Пуэр",
            subcategories: [
                {
                    name: "Уишаньский улун",
                    link: "#",
                },
                {
                    name: "Гуандунский улун",
                    link: "#",
                },
                {
                    name: "Тайваньский улун",
                    link: "#",
                }
            ],
        },
        {
            name: "Улун",
            subcategories: [
                {
                    name: "Уишаньский улун",
                    link: "#",
                },
                {
                    name: "Гуандунский улун",
                    link: "#",
                }
            ],
        },
        {
            name: "Хэй ча (черный чай)",
            subcategories: [
                {
                    name: "Уишаньский улун",
                    link: "#",
                },
                {
                    name: "Гуандунский улун",
                    link: "#",
                }
            ],
        },
        {
            name: "Красный чай",
            subcategories: [
                {
                    name: "Уишаньский улун",
                    link: "#",
                },
                {
                    name: "Гуандунский улун",
                    link: "#",
                }
            ],
        },
        {
            name: "Зеленый чай",
            subcategories: [
                {
                    name: "Уишаньский улун",
                    link: "#",
                },
                {
                    name: "Гуандунский улун",
                    link: "#",
                }
            ],
        },
    ]

    return (
        <></>
    )
}