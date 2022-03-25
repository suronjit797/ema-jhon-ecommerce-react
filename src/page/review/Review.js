import React from 'react';
import NotFound404 from '../../components/notFound404/NotFound404';
import ReviewCartLeft from '../../components/reviewCartLeft/ReviewCartLeft'
import ShopSummary from '../../components/shopSummary/ShopSummary';

import './Review.css'

const Review = ({ cart, allClearHandler }) => {
    return (
        <section className='review'>

            {
                cart.length <= 0 ? <NotFound404 /> : (
                    <>
                        <div className="review_left">
                            {
                                cart.map(item => <ReviewCartLeft
                                    key={item.id}
                                    img={item.img}
                                    name={item.name}
                                    price={item.price}
                                    shipping={item.shipping}
                                    quantity={item.quantity}
                                />)
                            }
                        </div>
                        <div className="review_right">
                            <ShopSummary cartItems={cart} allClearHandler={allClearHandler} />
                        </div>
                    </>
                )
            }

        </section>
    );
};

export default Review;