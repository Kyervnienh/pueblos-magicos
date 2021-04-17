import React, {useEffect} from 'react';
import CardComponent from '../../../components/Card/index';
import { dataTows } from '../../../fixtures/dataTownsExample.fixture';
import './index.scss';


/**
 * Componente para mostrar las ultimas 3 recomendaciones realizadas
 */
const UltimasRecomendaciones = () => {

    let temp = dataTows.slice(-3,dataTows.length);

    useEffect(() => {
      console.log(dataTows);
    }, [dataTows])

    return ( 
        <div>
            <h1 className="title">Ultimas recomendaciones</h1>
            <div className="cardContainer">
                {temp.map(town => (
                    <CardComponent 
                        nombre={town.name}
                        estado={town.state}
                        pts={town.pts}
                        img={town.img}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default UltimasRecomendaciones;