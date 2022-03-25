import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import './ShopSummary.css'
import { Link } from 'react-router-dom';

const ShopSummary = ({ cartItems, allClearHandler, secondBtn }) => {
    // console.log(cartItems)

    let shippingItems = 0
    let totalPrice = 0
    let shippingPrice = 0
    let tax = 0
    cartItems.forEach(cartItem => {
        shippingItems += cartItem.quantity
        totalPrice += (cartItem.price * cartItem.quantity)
        shippingPrice += (cartItem.shipping * cartItem.quantity)
        tax = parseFloat((totalPrice * .05).toFixed(2))
    });
    let grandTotal = parseFloat((totalPrice + shippingPrice + tax).toFixed(2))


    return (
        <div className='summary'>
            <p className='summary-header'>Shop Summary</p>
            <div className="summarty_number">
                <p className='mb-2'> Selected Items: {shippingItems} </p>
                <p className='mb-2'> Total Price: {totalPrice}  </p>
                <p className='mb-2'> Total Shipping Price: {shippingPrice} </p>
                <p className='mb-2'> Tax: {tax} </p>
                <p className='mb-2 grand_total'> Grand Total: {grandTotal} </p>
            </div>
            <div className="summary_button">
                <button className='clear_btn' onClick={allClearHandler}>
                    <span className="mr-1">Clear Cart</span>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
                {
                    secondBtn === 'review' ? (
                        <Link to='/review' >
                            <button className='review_btn'>
                                <span className="mr-1">Review Order</span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </Link>
                    ) : (
                        <Link to='/proceed' >
                            <button className='review_btn'>
                                <span className="mr-1">Proceed Order</span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default ShopSummary;