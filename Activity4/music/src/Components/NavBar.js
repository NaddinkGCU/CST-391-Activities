import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <span className='navbar-brand' href='#'>
                Noah's Music
            </span>
            <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNavAltMarkup'
                aria-controls='navbarNavAltMarkup'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon' ></span>
                
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup' >
                <div className='navbar-nav' >
                    <Link className='nav-item nav-link' to='/'>Main</Link>
                    
                    <Link className='nav-item nav-link' to='/new'>New</Link>
                    
                </div>
            </div>
        </nav>
    );
};

export default NavBar;