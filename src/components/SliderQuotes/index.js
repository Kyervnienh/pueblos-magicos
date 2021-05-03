import React, {useState, useEffect} from 'react';
import Carousel from 'react-elastic-carousel';
import './index.scss';
import CardQuotes from '../CardQuotes';
import PropTypes from 'prop-types';

const SliderQuotes = ({town}) => {

    let townSelected = parseInt(town);

    const [comments, setComments] = useState();

    const [show, setShow] = useState(false);

    useEffect(() => {
        const getTownsAPI = async () => {
            const url = 'http://localhost:4000/comments';
            const response = await fetch(url);
            const resultado = await response.json();
            const filt = resultado.filter(comment =>{
                return comment.dataTownId === townSelected;
            });
            setComments(filt);
            setShow(filt.length >= 1 ? true : false);
        }
        getTownsAPI();
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
                        <div key={item.id}>
                            <CardQuotes 
                                img={item.img}
                                quote={item.body}
                                person={item.name}
                                pts={item.pts}
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