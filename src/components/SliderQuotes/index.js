import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import './index.scss';
import CardQuotes from '../CardQuotes';
import PropTypes from 'prop-types';

const SliderQuotes = ({ town }) => {

    let townSelected = town;

    const [comments, setComments] = useState();

    const [show, setShow] = useState(false);

    useEffect(() => {
        const getTownsAPI = async () => {
            const url = `${process.env.REACT_APP_BACKEND_URL}/comments`;
            const response = await fetch(url);
            const resultado = await response.json();
            const filt = resultado.filter(comment => {
                return comment.dataTownId._id === townSelected;
            });
            setComments(filt);
            setShow(filt.length >= 1 ? true : false);
        }
        getTownsAPI();
        // eslint-disable-next-line
    }, []);

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];

    return (
        <>
            {
                show ? (
                    <div>
                        <h1 className="title">Comentarios sobre la reseña </h1>
                        <Carousel breakPoints={breakPoints}>
                            {comments?.map(item =>
                                <div key={item._id}>
                                    <CardQuotes
                                        img={item.img}
                                        quote={item.body}
                                        person={item.userId.name}
                                        pts={item.pts}
                                        town={town}
                                        idComment={item._id}
                                    />
                                </div>
                            )}
                        </Carousel>
                    </div>
                ) : null
            }

        </>
    );
}

SliderQuotes.propTypes = {
    town: PropTypes.string.isRequired,
}

export default SliderQuotes;