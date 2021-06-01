import React, { useState } from "react";
import "./allProductsCatalog.css";
import { SubCategories } from "../subCategories/index";
import { Subcategory, CatalogCategory } from "../../interafaces";

export const AllProductsCatalog: React.FC = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [openedCategory, setOpenedCategory] = useState<string>("");
    const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);

    const categories: Array<CatalogCategory> = [
        {
            name: "Пуэр",
            id: "1",
            subCategories: [
                {
                    name: "Уишаньский улун",
                    alias: "abc123",
                    id: "2",
                },
                {
                    name: "Гуандунский улун",
                    alias: "abc123",
                    id: "3",
                },
                {
                    name: "Тайваньский улун",
                    alias: "abc123",
                    id: "4",
                }
            ],
        },
        {
            name: "Улун",
            id: "5",
            subCategories: [
                {
                    name: "Уишаньский улун1",
                    alias: "abc123",
                    id: "6",
                },
                {
                    name: "Гуандунский улун1",
                    alias: "abc123",
                    id: "7",
                }
            ],
        },
        {
            name: "Хэй ча (черный чай)",
            id: "8",
            subCategories: [
                {
                    name: "Уишаньский улун2",
                    alias: "abc123",
                    id: "9",
                },
                {
                    name: "Гуандунский улун2",
                    alias: "abc123",
                    id: "10",
                }
            ],
        },
        {
            name: "Красный чай",
            id: "11",
            subCategories: [
                {
                    name: "Уишаньский улун3",
                    alias: "abc123",
                    id: "12",
                },
                {
                    name: "Гуандунский улун3",
                    alias: "abc123",
                    id: "13",
                }
            ],
        },
        {
            name: "Зеленый чай",
            id: "14",
            subCategories: [
                {
                    name: "Уишаньский улун4",
                    alias: "abc123",
                    id: "15",
                },
                {
                    name: "Гуандунский улун4",
                    alias: "abc123",
                    id: "16",
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
            category.subCategories.forEach((item: Subcategory) => {
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
                return <li key={item.id} 
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