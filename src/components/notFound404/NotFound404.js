import React from 'react';

import './NotFound404.css'

const NotFound404 = ({message}) => {
    return (
        <div className='not_found'>
            <p className="four_o_for">4O4 <span className="vr"></span> {message}</p>
        </div>
    );
};

export default NotFound404;