import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const LoadingComponent = () => {
    return (
            <>
                <Spinner animation="border" role="status">
                    <h1 className="sr-only">Loading...</h1>
                </Spinner>
            </>
    )
}

export default LoadingComponent;
