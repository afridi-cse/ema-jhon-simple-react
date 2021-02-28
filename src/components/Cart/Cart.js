import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const formatNumber = num => {
        let temp = num.toFixed(2);
        return Number(temp);
    }
    const productPrice = formatNumber(cart.reduce((total, element) => total + element.price, 0));
    
    const tax = formatNumber(productPrice / 10);
    let shipping = 0
    if (productPrice > 35) {
        shipping = 5;
    }
    else if (productPrice > 15) {
        shipping = 12.99;
    }
    else if(productPrice<=0){
        shipping=0;
    }
    else {
        shipping = 17.99;
    }
    const grandTotal =formatNumber(productPrice+tax+shipping) ;
   
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items Ordered: {cart.length}</h4>
            <p>Product Price: ${productPrice}</p>
            <p><small>Tax: ${tax} </small></p>
            <p><small>Shipping Charge: ${shipping} </small></p>
            <h4>Grand Total: ${grandTotal} </h4>
        </div>
    );
};

export default Cart;