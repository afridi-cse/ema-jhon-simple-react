import React from 'react';

const ReviewItem = (props) => {
    console.log(props.product);
    const {name,quantity,key,price} = props.product;
    return (
        <div>
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <h3>${price}</h3>
            <button 
            className='add-button'
            onClick={()=>props.handleRemoveProduct(key)}>
            Remove</button>
        </div>
    );
};

export default ReviewItem;