import React, { useEffect } from 'react';
import { dataTows } from '../../fixtures/dataTownsExample.fixture';
import './index.scss';
import { Button, Container, Form, Row } from 'react-bootstrap';
import CardComponent from '../Card';

const Filter = () => {

  const [state, setState] = React.useState('');

  useEffect(() => {
    setState('Todos los pueblos');
  },[]);

  const handleChangeState = (e) => {
    setState(e.target.parentNode.firstChild.value);
  };

  const filterDropdown = dataTows.filter(result => {
    if (state === 'Todos los pueblos') return true;

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

  const uniqueState = getUnique(dataTows, "state");

  const exampleAction = (name) => {
    console.log(`Se seleccionó ${name}`);
  }

  return (
    <>
      <Container className='cont'>
        <Form>
          <Row className='filter'>
            <Form.Control as="select" custom className='filter-select'>
              <option>
                Todos los pueblos
              </option>
              {uniqueState.map(town => 
                <option value={town.state} key={town.state}>
                  {town.state}
                </option>
              )}
            </Form.Control>
                  |
            <Button className="btn" type="button" onClick={handleChangeState}>Buscar</Button>
          </Row>
        </Form>
      </Container>
      <div className="cardContainer">
        {filterDropdown.map(town => (
          <CardComponent
            name={town.name}
            state={town.state}
            pts={town.pts}
            img={town.img}
            key={town.id}
            action={() => exampleAction(town.name)}
          />
        ))}
      </div>
    </>
  )
}

export default Filter;