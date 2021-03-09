import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [ cart, setCart ] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product =fakeData.find(pd=> pd.key===key);
            product.quantity=savedCart[key];
            return product;
        });
        setCart(cartProducts);
    },[]);

    const handleRemoveProduct=(productKey)=>{
        const newCart =cart.filter(pd=> pd.key!==productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    const [orderPlaced, setOrderPlaced]=useState(false);
    const handleOrderPlaced=()=>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }
    let thankYou;
    if(orderPlaced){
        thankYou= <img src={happyImage} alt=""/>
    }

    return (
        <div className="review-container">
            <div className="product-container">
            <h1>Cart Item: {cart.length}</h1>
            {
                cart.map(pd=>
                <ReviewItem
                product={pd}
                handleRemoveProduct={handleRemoveProduct}
                key={pd.key}>
                </ReviewItem> )
            }
            {
                thankYou
            }
            </div>
            <div className="cart-container">                
                <Cart cart={cart}>
                    <button onClick={handleOrderPlaced} className="add-button">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;