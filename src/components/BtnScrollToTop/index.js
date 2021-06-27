import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './index.scss';

const BtnScrollToTop = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 100) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth"
        })
    }

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button className={`btnScrollToTop ${visible ? 'active' : null}`} onClick={scrollToTop}>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </Button>
    )
}

export default BtnScrollToTop;