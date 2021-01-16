import React, { useState } from 'react';
import "./home.css";
import { Header } from "../../components/header/index";
import { Catalog } from "../../components/catalog/index";
import { Section } from "../../components/section/index"
import { Footer } from "../../components/footer/index";

interface Product {
    priceRub: number,
    priceUah: number,
    originalPrice: number,
    discount: number,
    name: string,
    image: string,
}

interface Section {
    name: string,
    products: Array<Product>,
}

export const HomePage: React.FC = () => {
    const [isCatalogOpened, setIsCatalogOpened] = useState<boolean>(false);

    const mostPopularProducts: Array<Section> = [
        {
            name: "Пуэр",
            products: [
                {
                    priceRub: 260,
                    priceUah: 100,
                    originalPrice: 360,
                    discount: 45,
                    name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
                    image: "./tea-1",
                },
                {
                    priceRub: 260,
                    priceUah: 100,
                    originalPrice: 360,
                    discount: 45,
                    name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
                    image: "./tea-1",
                },
                {
                    priceRub: 260,
                    priceUah: 100,
                    originalPrice: 360,
                    discount: 45,
                    name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
                    image: "./tea-1",
                },
                {
                    priceRub: 260,
                    priceUah: 100,
                    originalPrice: 360,
                    discount: 45,
                    name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
                    image: "./tea-1",
                }
            ]
        },
        {
            name: "Пуэр",
            products: [
                {
                    priceRub: 260,
                    priceUah: 100,
                    originalPrice: 360,
                    discount: 45,
                    name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
                    image: "./tea-1",
                },
                {
                    priceRub: 260,
                    priceUah: 100,
                    originalPrice: 360,
                    discount: 45,
                    name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
                    image: "./tea-1",
                },
                {
                    priceRub: 260,
                    priceUah: 100,
                    originalPrice: 360,
                    discount: 45,
                    name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
                    image: "./tea-1",
                },
                {
                    priceRub: 260,
                    priceUah: 100,
                    originalPrice: 360,
                    discount: 45,
                    name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
                    image: "./tea-1",
                }
            ]
        }
    ] 

    return (
        <>
            <Header isCatalogOpened={isCatalogOpened} setIsCatalogOpened={setIsCatalogOpened} />
            <div className="container">
                <Catalog isCatalogOpened={isCatalogOpened} />
                <main>
                    <img src="img/main-img.png" />
                    <div className="content">
                        {mostPopularProducts && mostPopularProducts.map(item => {
                            return <Section section={item} />
                        })}
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}