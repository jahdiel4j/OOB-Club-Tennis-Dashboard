import React from 'react'
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="social-icons">
                        <Link className="social-icon-link" facebook
                            to="//www.facebook.com/groups/2200438079/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link className="social-icon-link" instagram
                            to="//www.instagram.com/ufclubtennis/?hl=en"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
