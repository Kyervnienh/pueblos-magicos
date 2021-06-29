import React from 'react';
import './index.scss';

import InfoPageCard from '../../../../components/InfoPageCard';
// import {infoHome} from '../../../../fixtures/infoHome';
import example from '../../../../assets/sayulita.jpg';


const Recomendaciones = () => {
  const infoHome = [
    {
        subtitle: 'UNETE',
        title: 'Se parte de nuestra comunidad',
        description: 'Somos una comunidad de personas interesadas en el valor cultural, histórico, arquitectónico y gastronomico de los destinos mágicos que existen dentro de México, unete para conocer a gente de diferentes estado del país que nos comparten su amor por México.',
        imagen: 'https://i1.wp.com/agileexperience.es/wp-content/uploads/2020/01/team-spirit.jpg?resize=1080%2C874&ssl=1',
        orderD: 1,
        orderImg: 2
    },
    {
        subtitle: 'DESCUBRE',
        title: 'Enamórate de nuestros Pueblos Mágicos.',
        description: 'Los Pueblos Mágicos se definen como lugares con grandes simbolismos y leyendas, son poblados cuya importancia histórica ha sido fundamental para el desarrollo de la historia y que enaltecen la identidad nacional en cada uno de sus rincones.',
        imagen: example,
        orderD: 2,
        orderImg: 1
    },
    {
        subtitle: 'COMPARTE',
        title: 'Tu experiencia',
        description: 'Aprenderás de civilizaciones milenarias, cuya esencia permanece hasta nuestros días y conocerás el trabajo de los artesanos, cuya maestría pasa de generación en generación y te deleitarás con las mezcla de sabores.',
        imagen: 'https://casalum.com/wp-content/uploads/2020/07/CHIAPA_DE_CORSO-parachicos-1024x640.jpg',
        orderD: 1,
        orderImg: 2
    }
  ]

  return ( 
    <div>
      {
        infoHome?.map((data) => (
          <InfoPageCard 
          subtitle={data.subtitle}
          title ={data.title}
          description = {data.description}
          imagen={data.imagen}
          orderD = {data.orderD}
          orderImg = {data.orderImg}
          key={data.subtitle}
          />
        ))
      }
    </div>
   );
}

export default Recomendaciones;