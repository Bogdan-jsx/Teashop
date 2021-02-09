import React, { useState } from "react";
import "./allProductsCatalog.css";
import { SubCategories } from "../subCategories/index";

interface Subcategory {
    name: string,
    _id: number,
}

interface CatalogCategory {
    name: string,
    subcategories: Array<Subcategory>,
    _id: number,
}

export const AllProductsCatalog: React.FC = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [openedCategory, setOpenedCategory] = useState<string>("");
    const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);

    const categories: Array<CatalogCategory> = [
        {
            name: "Пуэр",
            _id: 1,
            subcategories: [
                {
                    name: "Уишаньский улун",
                    _id: 2,
                },
                {
                    name: "Гуандунский улун",
                    _id: 3,
                },
                {
                    name: "Тайваньский улун",
                    _id: 4,
                }
            ],
        },
        {
            name: "Улун",
            _id: 5,
            subcategories: [
                {
                    name: "Уишаньский улун1",
                    _id: 6,
                },
                {
                    name: "Гуандунский улун1",
                    _id: 7,
                }
            ],
        },
        {
            name: "Хэй ча (черный чай)",
            _id: 8,
            subcategories: [
                {
                    name: "Уишаньский улун2",
                    _id: 9,
                },
                {
                    name: "Гуандунский улун2",
                    _id: 10,
                }
            ],
        },
        {
            name: "Красный чай",
            _id: 11,
            subcategories: [
                {
                    name: "Уишаньский улун3",
                    _id: 12,
                },
                {
                    name: "Гуандунский улун3",
                    _id: 13,
                }
            ],
        },
        {
            name: "Зеленый чай",
            _id: 14,
            subcategories: [
                {
                    name: "Уишаньский улун4",
                    _id: 15,
                },
                {
                    name: "Гуандунский улун4",
                    _id: 16,
                }
            ],
        },
    ]

    const openCategory = (name: string) => {
        if (openedCategory === name) {
            setOpenedCategory("");
        } else {
            setOpenedCategory(name);
        }
    }

    const clearFilters = () => {
        setSelectedCategories([]);
        setSelectedSubCategories([]);
    }

    const toggleCategory = (category: CatalogCategory, subName: string) => {
        const subIndex = selectedSubCategories.indexOf(subName);
        if (subIndex != -1) {
            let updatedSelectedSubs = [...selectedSubCategories];
            updatedSelectedSubs.splice(subIndex, 1);
            setSelectedSubCategories(updatedSelectedSubs);
            let areThereOtherSubs = false;
            category.subcategories.forEach((item: Subcategory) => {
                if (selectedSubCategories.indexOf(item.name) != -1) {
                    areThereOtherSubs = true;
                }
            });
            if (areThereOtherSubs === false) {
                console.log(0);
                const categoryIndex = selectedCategories.indexOf(category.name);
                let updatedSelectedCategories = [...selectedCategories];
                updatedSelectedCategories.splice(categoryIndex, 1);
                setSelectedCategories(updatedSelectedCategories);
            }
            console.log(selectedCategories);
            console.log(selectedSubCategories);
        } else {
            setSelectedSubCategories([...selectedSubCategories, subName]);
            if (selectedCategories.indexOf(category.name) === -1) {
                setSelectedCategories([...selectedCategories, category.name]);
            }
        }
        console.log(selectedCategories);
            console.log(selectedSubCategories);
    }

    return (
        <ul className="filter-catalog">
            {categories && categories.map((item: CatalogCategory) => {
                return <li key={item._id} 
                    className={selectedCategories.indexOf(item.name) != -1 ? "selected" : ""}>
                    <span className="material-icons">
                        {openedCategory === item.name ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                    </span>
                    <p onClick={openCategory.bind(null, item.name)}>{item.name}</p>
                    {openedCategory === item.name ? 
                    <SubCategories category={item} toggleCategory={toggleCategory} selectedSubs={selectedSubCategories} /> : ""}
                </li>
            })}
            <li className="clear-filters"><button onClick={clearFilters.bind(null)}>Очистить фильтры</button></li>
        </ul>
    )
}