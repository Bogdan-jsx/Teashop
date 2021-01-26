import React, { useState } from 'react';
import "./home.css";
import { FullHeader } from "../../components/fullHeader/index";
import { Section } from "../../components/section/index"
import { Footer } from "../../components/footer/index";

interface Product {
    price: number,
    discount: number,
    name: string,
    image: string,
}

interface Section {
    name: string,
    products: Array<Product>,
}

export const HomePage: React.FC = () => {
    const mostPopularProducts: Array<Section> = [
        {
            name: "Пуэр",
            products: [
                {
                    price: 360,
                    discount: 0,
                    name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
                    image: "./tea-1",
                },
                {
                    price: 360,
                    discount: 45,
                    name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
                    image: "./tea-1",
                },
                {
                    price: 360,
                    discount: 45,
                    name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
                    image: "./tea-1",
                },
                {
                    price: 360,
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
                    price: 360,
                    discount: 45,
                    name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
                    image: "./tea-1",
                },
                {
                    price: 360,
                    discount: 45,
                    name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
                    image: "./tea-1",
                },
                {
                    price: 360,
                    discount: 45,
                    name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
                    image: "./tea-1",
                },
                {
                    price: 360,
                    discount: 45,
                    name: "Шу пуэр Лу Е Чунь «Гу Шу Чень Юнь», 2009 г., 357 гр. 2009 г., 3573.",
                    image: "./tea-1",
                }
            ]
        }
    ] 

    return (
        <>
            <FullHeader />
            <div className="container">
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