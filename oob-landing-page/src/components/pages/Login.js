import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom';

export default function Events() {
    return (
    <div className = "login">
    <h1>Login through Google</h1>
            <Link className="icon-link" login
                to="//accounts.google.com/ServiceLogin/signinchooser?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                target="_blank"
                aria-label="Login"
                        >
                <i className="fas fa-chart-bar" />
            </Link>
    </div>
    );
}

