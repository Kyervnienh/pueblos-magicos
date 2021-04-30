import React from 'react';
import './index.scss';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () =>
    <Carousel indicators={false} controls={false}>
        <Carousel.Item>
            <img
                className="carousel-img d-block w-100"
                src="https://media.architecturaldigest.com/photos/5bd0e1fc54bd2b5be7ac78cb/16:9/w_2560%2Cc_limit/GettyImages-162318248.jpg"
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="carousel-img d-block w-100"
                src="http://www.pueblosmexico.com.mx/IMG/arton173.jpg"
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="carousel-img d-block w-100"
                src="https://www.gob.mx/cms/uploads/article/main_image/84226/Acueducto-de-Tepotzotlan-Edo-Mex-web.jpg"
                alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>

export default Slider;