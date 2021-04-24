import React from 'react';
import { dataTows } from '../../fixtures/dataTownsExample.fixture';
import './index.scss'

function Filter(props) {

    const [state, setState] = React.useState('');

    const towns = dataTows.filter(t => {
        for (let k in Object.keys(t)){
            if (Object.keys(t)[k] === 'state') return t
        }
    })

    const handleSubmitCourse = (e) => {
        alert("Estado seleccionado: " + state);
        e.preventDefault();
    }

    const handleChangeTown = (e) => {
        setState(e.target.value);
    };

    const filterDropdown = towns.filter(function(result) {
        return result.state === state;
    });

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

    const uniqueCouse = getUnique(towns, "state");


    return(
        <>
        <form 
        className='cont container d-flex justify-content-around align-items-center'
        onSubmit={handleSubmitCourse}>
        
            <select
              value={state}
              onChange={handleChangeTown}
              className='form-select'
            >
              {uniqueCouse.map(town => (
                <option  value={town.state} key={town.state}>
                  {town.state}
                </option>
              ))}
            </select>
        |
          <input type="submit" value="Buscar" className='btn'/>
        </form>
        <div>
        {filterDropdown.map(town => (
          <div style={{ margin: "10px" }} key={town.name}>
            {town.name}
            <br />
          </div>
        ))}
      </div>
      </>
    )
}

export default(Filter);