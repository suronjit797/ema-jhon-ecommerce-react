import React from 'react';
import { Link } from 'react-router-dom';

import homeImg from '../../images/home.png'

import './Home.css'

const Home = () => {
    return (
        <section className='home'>
            <div className="home_left">
                <small className='text-orange'> Sale up to 70% off </small>
                <div className="home_text">
                    <h1>New Collection For Fall</h1>
                    <p>Discover all the new arrivals of ready-to-wear collection.</p>
                </div>
                <Link to='/shop' className='btn_orange'> Shop Now </Link>
            </div>
            <div className="home_right">
                <img src={homeImg} alt="" />
            </div>
        </section>
    );
};

export default Home;