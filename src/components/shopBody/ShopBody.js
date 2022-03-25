import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"

import './ShopBody.css'


const shop = ({ product, addToCardHandler }) => {
    let { id, category, name, seller, price, stock, ratings, ratingsCount, img } = product

    return (
        <div className='shop_card'>
            <img src={img} alt="Photos" />
            <div className="shop_card-body">
                <h4 className="shop_card-title">{name}</h4>

                <p className='shop_card-price'> Prirce: <span>${price}</span> </p>
                <p> <small> Manufacturer : {seller} </small> </p>
                <p> <small> Ratings: {ratings} / {ratingsCount} </small> </p>
                <p> <small> Category: {category} </small> </p>
                <p> <small> Stock: {stock > 0 ? stock : <span className='text-red'> Out of stock </span>} </small> </p>

            </div>
            <button className="addToCart" onClick={() => { addToCardHandler(id) }}> Add to cart  <FontAwesomeIcon icon={faCartPlus} size="lg" />  </button>
        </div>
    );
};

export default shop;