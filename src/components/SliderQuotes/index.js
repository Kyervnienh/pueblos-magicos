import React, {useState} from 'react';
import Carousel from 'react-elastic-carousel';
import './index.scss';
import CardQuotes from '../CardQuotes';
import avatar from '../../assets/icons/avatarboy.png';

const SliderQuotes = () => {

    const [items, setItem] = useState([
        {   
            id: 1, 
            img: avatar,
            quote: 'Sed auctor, nunc non consequat congue, dui nisi rhoncus augue, vitae pharetra elit mauris et odio. ',
            person: 'Antonio Moreno',
            pts: '4.4'
        },
        {   
            id: 2, 
            quote: 'Sed auctor, nunc non consequat congue, dui nisi rhoncus augue, vitae pharetra elit mauris et odio.',
            person: 'Paulina Mendez',
            pts: '4.3'
        },
        {   
            id: 3, 
            img: avatar,
            quote: 'Sed auctor, nunc non consequat congue, dui nisi rhoncus augue, vitae pharetra elit mauris et odio.',
            person: 'Jesrig Sanchez',
            pts: '4.3'
        },
        {   
            id: 4, 
            quote: 'Sed auctor, nunc non consequat congue, dui nisi rhoncus augue, vitae pharetra elit mauris et odio.',
            person: 'Raquel Perez',
            pts: '4.3'
        },
        {   
            id: 5, 
            img: avatar,
            quote: 'Sed auctor, nunc non consequat congue, dui nisi rhoncus augue, vitae pharetra elit mauris et odio.',
            person: 'Kevin Elizalde',
            pts: '2.3'
        },
        {   
            id: 6, 
            quote: 'Sed auctor, nunc non consequat congue, dui nisi rhoncus augue, vitae pharetra elit mauris et odio.',
            person: 'Sonia Bedu',
            pts: '3.3'
        },
      ]);

      const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 }
      ];
    
    return ( 
        <div>
        <h1 className="title">Comentarios sobre la reseña </h1>
        
        <Carousel breakPoints={breakPoints}>
            {items.map(item => 
                <div key={item.id}>
                    <CardQuotes 
                        img={item.img}
                        quote={item.quote}
                        person={item.person}
                        pts={item.pts}
                    />
                </div>
            )}
        </Carousel>
        </div>
     );
}
 
export default SliderQuotes;