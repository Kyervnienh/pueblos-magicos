import React from 'react';
import './index.scss';

function Slider() {

    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://media.architecturaldigest.com/photos/5bd0e1fc54bd2b5be7ac78cb/16:9/w_2560%2Cc_limit/GettyImages-162318248.jpg" className="carousel-img d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="http://www.pueblosmexico.com.mx/IMG/arton173.jpg" className="carousel-img d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://www.gob.mx/cms/uploads/article/main_image/84226/Acueducto-de-Tepotzotlan-Edo-Mex-web.jpg" className="carousel-img d-block w-100" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default (Slider);