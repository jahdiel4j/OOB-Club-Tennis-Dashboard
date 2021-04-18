import React from 'react';
import { Button } from '../Button';
import '../../App.css'
import { Link } from 'react-router-dom';

function Home () {
    return (
        <div className='events'>
            <h1>CALENDAR OF EVENTS</h1>
            <Link className="icon-link" calendar
                to="//calendar.google.com/calendar/u/1?cid=Y2x1YnRlbm5pc3VmQGdtYWlsLmNvbQ
"
                target="_blank"
                aria-label="Calendar"
                        >
                <i className="fas fa-calendar-day" />
            </Link>
        </div>
    );
}

export default Home;