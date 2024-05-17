import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function riverCity(){
    return(
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>River City</Card.Title>
            <Card.Text>
            Famous for its riverside cafe and bohemian neighborhoods.
            </Card.Text>
            <Link to="R_desc">
                <a className="btn btn-primary">Explore River City</a>
            </Link>
        </Card.Body>
        </Card>
        <Outlet/>
        </>
    )
}

export default riverCity;

