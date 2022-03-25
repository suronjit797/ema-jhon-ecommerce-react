import ShopBody from '../../components/shopBody/ShopBody'
import ShopSummary from '../../components/shopSummary/ShopSummary'

import './Shop.css'

const Shop = ({ products, addToCardHandler, cart, allClearHandler }) => {


    return (
        <section className='shop' >
            <div className="shop_body">
                {
                    products.map(product => (
                        <ShopBody
                            product={product}
                            addToCardHandler={addToCardHandler}
                            key={product.id}
                        />))
                }
            </div>
            <div className="shop_summary">
                <ShopSummary cartItems={cart} allClearHandler={allClearHandler} />
            </div>
        </section>
    );
};

export default Shop;