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
            <div className="selected-image" style={{backgroundImage: `url(${"http://localhost:3000/image/" + selectedImage})`}} ></div>
            <ul className="all-slider-images">
                {images && images.map((item: string) => {
                    return  <li className="slider-image" key={item}>
                                <div style={{backgroundImage: `url(${"http://localhost:3000/image/" + item})`}} onClick={selectImage.bind(null, item)} ></div>
                            </li>
                })}
            </ul>
        </div>
    )
}