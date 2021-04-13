import React from 'react';
import { Button } from '../Button';
import '../../App.css'
import { Link } from 'react-router-dom';

function Home () {
    return (
        <div className='ladder'>
            <h1>Ladder Rankings</h1>
            <Link className="icon-link" ladder
                to="//drive.google.com/file/d/1rDzkm5-e9oiFgxgLwAO4tvsP0OuZXk_0/view"
                target="_blank"
                aria-label="Ladder"
                        >
                <i className="fas fa-chart-bar" />
            </Link>
        </div>
    );
}

export default Home;