import React, { useEffect } from 'react';
import "./home.css";
import { FullHeader } from "../../components/fullHeader/index";
import { Section } from "../../components/section/index";
import { Footer } from "../../components/footer/index";
import { CatalogCategory, SectionAttr } from "../../interafaces";
import { Loader } from '../../components/loader';
import mainImg from "../../../public/img/mainImg.png";
import { Link } from 'react-router-dom';

interface Props {
    categories: CatalogCategory[],
    mainProducts: SectionAttr[],
    isLoading: boolean,
    loadMain: (subCategoryIds: string[]) => void,
}

export const HomePage: React.FC<Props> = ({ categories, mainProducts, isLoading, loadMain }) => {
    useEffect(() => {
        if (categories[0]) {
            let subIds = [];
            let sectionsLeft = 2;
            for (const category of categories) {
                for (const sub of category.subCategories) {
                    subIds.push(sub.id);
                    sectionsLeft--;
                    if (sectionsLeft === 0) {
                        break;
                    }
                }
            }
            loadMain(subIds);
        }
    }, [categories, loadMain ])

    const onButtonClick = () => {
        sessionStorage.setItem("subCategory", "");
    }

    return (
        <>
            <FullHeader />
            <div className="container">
                <main>
                    <div className="main-img" style={ { backgroundImage: `url(${process.env.PUBLIC_URL + "/img/mainImg.png"})` } }>
                        <div className="see-all-products">
                            <Link to="/catalog" onClick={onButtonClick.bind(null)} >Посмотреть ассортимент</Link>
                        </div>
                    </div>
                    {isLoading ? 
                        <Loader /> :
                        <div className="content">
                            {mainProducts && mainProducts.map(item => {
                                return <Section section={item} key={item.name} />
                            })}
                        </div>
                    }
                </main>
            </div>
            <Footer />
        </>
    );
}