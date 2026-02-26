import { useState } from "react";
import ArrowLeft from "../../../assets/icons/arrow-left-svgrepo-com.svg?react";
import ArrowRight from "../../../assets/icons/arrow-right-svgrepo-com.svg?react";
import '../../../style/index.css'

import img1 from '../../../assets/images/image1.jpg'
import img2 from '../../../assets/images/image2.jpg'
import img3 from '../../../assets/images/image3.jpg'

function Showcasebox()
{
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [img1,img2,img3]

    function nextImage()
    {
        setCurrentIndex((currentIndex + 1) % images.length)
    }

    function prevImage()
    {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length)
    }
    


    return (
        <div className="showcase-box">
                <ul className="showcase-list">
                    <li>
                        <ArrowLeft className="arrowleft" onClick={prevImage}/>
                    </li>
                    <li className="picture-box">
                    <img className="picture" src={images[currentIndex]} alt="Showcase"/>
                    </li>
                    <li >
                        <ArrowRight className="arrowright" onClick={nextImage}/>
                    </li>
                </ul>
            </div>
    )
}


export default Showcasebox;