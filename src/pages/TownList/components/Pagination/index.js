import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './index.scss'

const Pagination = props => {
    let pageItem = [];

    for (let number = 1; number <= Math.ceil(props.numberOfCards / 3); number++) {
        pageItem.push(number);
    }

    return (
        <div className="paginationContainer">
            <p>Pag.</p>
            {pageItem.map(pageNumber => (
                <Button
                    key={pageNumber}
                    value={pageNumber}
                    className={`paginationItem ${pageNumber === props.currentPage ? 'currentPage' : ''}`}
                    onClick={props.changePage}
                >
                    {pageNumber}
                </Button>
            ))}
        </div>
    )
}

Pagination.propTyper = {
    numberOfCards: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired
}

export default Pagination;