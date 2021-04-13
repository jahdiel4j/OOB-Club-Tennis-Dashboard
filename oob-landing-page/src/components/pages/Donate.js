import React from 'react';
import { Button } from '../Button';
import '../../App.css'
import { Link } from 'react-router-dom';

function Home () {
    return (
        <div className='donate'>
            <h1>DONATE</h1>
            <Link className="icon-link" venmo
                to="//venmo.com/"
                target="_blank"
                aria-label="Venmo"
                        >
                <i className="fas fa-money-check-alt" />
            </Link>
            <h5>Tag: @kara-evans-24</h5>
        </div>
    );
}

export default Home;