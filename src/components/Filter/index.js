import React from 'react';
import { dataTows } from '../../fixtures/dataTownsExample.fixture';
import './index.scss';
import { Button, Container, Form, Row } from 'react-bootstrap';

const Filter = () => {

  const [state, setState] = React.useState('');

  const towns = dataTows.filter(t => {
    for (let k in Object.keys(t)) {
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

  const filterDropdown = towns.filter( result => {
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

  const uniqueState = getUnique(towns, "state");


  return (
    <>
      <Container className='cont'>
        <Form>
          <Row className='filter'>
            <Form.Control as="select" custom className='filter-select' onChange={handleChangeTown}>
              {uniqueState.map(town => (
                <option value={town.state} key={town.state}>
                  {town.state}
                </option>
              ))}
            </Form.Control>
                  |
            <Button className="btn" type="button" onClick={handleSubmitCourse}>Buscar</Button>
          </Row>
        </Form>
      </Container>
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

export default Filter;