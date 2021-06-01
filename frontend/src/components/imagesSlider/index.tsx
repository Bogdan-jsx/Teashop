import React, { useState } from "react";
import "./imagesSlider.css"

interface Props {
    images: Array<string>,
}

export const ImagesSlider: React.FC<Props> = ({images}) => {
    const [selectedImage, setSelectedImage] = useState<String>(images[0]);

    const selectImage = (image: String) => {
        setSelectedImage(image);
    }

    return (
        <div className="images-slider">
            <div className="selected-image" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/img/" + selectedImage})`}} ></div>
            <ul className="all-slider-images">
                {images && images.map((item: String) => {
                    return  <li className="slider-image">
                                <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/image/" + item})`}} onClick={selectImage.bind(null, item)} ></div>
                            </li>
                })}
            </ul>
        </div>
    )
}