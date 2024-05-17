import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


function coastalTown(){
    return(
    <>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Coastal Town</Card.Title>
          <Card.Text>
            A beautiful seaside town with a laid-back atmosphere.
          </Card.Text>
          <Link to="C_desc">
            <a className="btn btn-primary">Explore Coastal Town</a>
          </Link>
        </Card.Body>
    </Card>
    <Outlet />
    </>
    )
}

export default coastalTown;
