import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

import './ReviewCartLeft.css'


const ReviewCartLeft = ({ id, img, name, price, shipping, quantity, deleteHandler }) => {

    return (
        <div className='review_cart-left'>
            <img src={img} alt="" className='review_cart-img' />
            <div>
                <p className="name"> {name} </p>
                <p> Price:
                    <span className='text-orange'> {price} </span>
                </p>
                <p> Shipping Charge:
                    <span className='text-orange'> {shipping} </span>
                </p>
                <p> Quantity:
                    <span className='text-orange'> {quantity} </span>
                </p>
            </div>
            <div className='review_cart-delete' onClick={()=>deleteHandler(id)}>
                <FontAwesomeIcon icon={faTrashCan} />
            </div>
        </div>
    );
};

export default ReviewCartLeft;