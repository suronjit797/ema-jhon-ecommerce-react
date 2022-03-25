import React from 'react';
import NotFound404 from '../../components/notFound404/NotFound404';
import ReviewCartLeft from '../../components/reviewCartLeft/ReviewCartLeft'
import ShopSummary from '../../components/shopSummary/ShopSummary';

import './Review.css'

const Review = ({ cart, allClearHandler, deleteHandler }) => {
    return (
        <>

            {
                cart.length <= 0 ? <NotFound404 message="No order find hare" /> : (
                    <section className='review'>
                        <div className="review_left">
                            {
                                cart.map(item => <ReviewCartLeft
                                    key={item.id}
                                    id={item.id}
                                    img={item.img}
                                    name={item.name}
                                    price={item.price}
                                    shipping={item.shipping}
                                    quantity={item.quantity}
                                    deleteHandler={deleteHandler}
                                />)
                            }
                        </div>
                        <div className="review_right">
                            <ShopSummary
                                cartItems={cart}
                                allClearHandler={allClearHandler}

                            />
                        </div>
                    </section>
                )
            }

        </>
    );
};

export default Review;