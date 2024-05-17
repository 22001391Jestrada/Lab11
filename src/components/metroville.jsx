import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function metroville(){
    return(
    <>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Metroville</Card.Title>
          <Card.Text>
            A sprawling metropolitan area known for its high-tech industry and vibrant arts scene.
          </Card.Text>
          <Link to="M_desc">
            <a className="btn btn-primary">Explore Metroville</a>
          </Link>
        </Card.Body>
    </Card>
    <Outlet/>
    </>
    )
}

export default metroville;
