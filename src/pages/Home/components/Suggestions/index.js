import React, {useEffect, useState} from 'react';
import CardComponent from '../../../../components/Card/index';
import noDataImg from '../../../../assets/icons/nodata.jpg';
import './index.scss';


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

    const NoData = () => (
        <div className='noData'> 
            <img src={noDataImg} alt="https://www.freepik.com/vectors/data" className='imgNoData' />
            <p className="title">No se encontraron datos</p>
        </div>
    );

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
                 <NoData />
               )
            }
        </div>
     );
}
 
export default SuggestionsComponent;