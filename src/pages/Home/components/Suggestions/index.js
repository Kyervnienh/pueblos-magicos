import React, {useEffect, useState} from 'react';
import CardComponent from '../../../../components/Card/index';
import './index.scss';
import NotFound from '../../../../components/NotFound';


/**
 * Componente para mostrar las ultimas 3 recomendaciones realizadas
 */
const SuggestionsComponent= () => {

    const [suggestions, setSuggestions] = useState();

    useEffect(() => {
        const getTownsAPI = async () => {
            const url = 'http://localhost:4000/datatown';
            const response = await fetch(url);
            const resultado = await response.json();
            setSuggestions(resultado.slice(-3,resultado.length))
        }
        getTownsAPI();
    }, []);

    const exampleAction = (name) => {
        console.log(`Se seleccionó ${name}`);
    }

    return ( 
        <div className="main">
            <h1 className="title">Ultimas recomendaciones</h1>
            {
               suggestions ? (
                <div className="cardContainer">
                {suggestions?.map(town => (
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
               ) : 
               (
                 <NotFound>No se encontraron datos</NotFound>
               )
            }
        </div>
     );
}
 
export default SuggestionsComponent;