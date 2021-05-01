import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { Button, Container, Form, Row } from 'react-bootstrap';

const Filter = (props) => {

  return (
    <>
      <Container className='cont'>
        <Form>
          <Row className='filter'>
            <Form.Control as="select" custom className='filter-select'>
              <option>
                Todos los pueblos
              </option>
              {props.uniqueState.map(town =>
                <option value={town.state} key={town.state}>
                  {town.state}
                </option>
              )}
            </Form.Control>
                  |
            <Button className="btn" type="button" onClick={props.handleChangeState}>Buscar</Button>
          </Row>
        </Form>
      </Container>
    </>
  )
}

Filter.propTypes = {
  uniqueState: PropTypes.array.isRequired,
  handleChangeState: PropTypes.func.isRequired
}

export default Filter;