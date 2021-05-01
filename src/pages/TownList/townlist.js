import React from 'react';
import { dataTows } from '../../fixtures/dataTownsExample.fixture';
import NavSidebar from '../../components/NavSidebar';
import Slider from '../../components/Slider';
import Filter from '../../components/Filter';
import CardComponent from '../../components/Card'
import Pagination from './components/Pagination';
import Footer from '../../components/Footer';

const TownList = () => {
    const [state, setState] = React.useState('Todos los pueblos');
    const [currentPage, setCurrentPage] = React.useState(1);
    const [inferiorLimit, setInferiorLimit] = React.useState(0);
    const [superiorLimit, setSuperiorLimit] = React.useState(3);

    const handleChangeState = (e) => {
        setState(e.target.parentNode.firstChild.value);
        setCurrentPage(1);
        setInferiorLimit(0);
        setSuperiorLimit(3);
    };

    const townsFiltered = dataTows.filter(result => {
        if (state === 'Todos los pueblos') return true;

        return result.state === state;
    });

    const filterDropdown = () => {
        let towns = [];

        for (let i = inferiorLimit; i < superiorLimit; i++) towns.push(townsFiltered[i]);
        return towns;
    }

    const getUnique = (arr, comp) => {
        const unique = arr
            //store the comparison values in array
            .map(e => e[comp])

            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

            // eliminate the dead keys & store unique objects
            .filter(e => arr[e])

            .map(e => arr[e]);

        return unique;
    }

    const uniqueState = getUnique(dataTows, "state");

    const exampleAction = (name) => {
        console.log(`Se seleccionó ${name}`);
    }

    const changePage = (e) => {
        setCurrentPage(parseInt(e.target.value));
        setInferiorLimit((parseInt(e.target.value) - 1) * 3);
        if (parseInt(e.target.value) * 3 >= townsFiltered.length) {
            setSuperiorLimit(townsFiltered.length)
        } else {
            setSuperiorLimit(parseInt(e.target.value) * 3);
        }
    }

    return (
        <>
            <NavSidebar />
            <Slider />
            <Filter uniqueState={uniqueState} handleChangeState={handleChangeState} />
            <div className="cardContainer">
                {filterDropdown().map(town => (
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
            <Pagination numberOfCards={townsFiltered.length} currentPage={currentPage} changePage={changePage} />
            <Footer />
        </>
    )
}

export default TownList;