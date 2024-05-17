import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function customNavbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">City Explorer</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <Link to="/">
                        <a class="nav-link">Home</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/metroville">
                        <a class="nav-link">Metroville</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/rivercity">
                        <a class="nav-link">River City</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/coastaltown">
                        <a class="nav-link">Coastal Town</a>
                    </Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default customNavbar;