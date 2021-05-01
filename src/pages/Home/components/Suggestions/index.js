import React from 'react';
import CardComponent from '../../../../components/Card/index';
import { dataTows } from '../../../../fixtures/dataTownsExample.fixture';
import './index.scss';


/**
 * Componente para mostrar las ultimas 3 recomendaciones realizadas
 */
const SuggestionsComponent= () => {

    let temp = dataTows.slice(-3,dataTows.length);

    const exampleAction = (name) => {
            console.log(`Se seleccionó ${name}`);
    }

    return ( 
        <div>
            <h1 className="title">Ultimas recomendaciones</h1>
            <div className="cardContainer">
                {temp.map(town => (
                    <CardComponent 
                        name={town.name}
                        state={town.state}
                        pts={town.pts}
                        img={town.img}
                        key={town.id}
                        id={town.id}
                        action={() => exampleAction(town.name)}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default SuggestionsComponent;