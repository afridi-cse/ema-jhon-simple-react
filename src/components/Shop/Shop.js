import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import '../Product/Product';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const firstTen= fakeData.slice(0,10);
    const [products,setProducts]=useState(firstTen);
    // console.log(products)
    const [cart, setCart] = useState([]);

    const handleAddProduct=(product)=>{
      console.log("I love you",product);
      setCart([...cart, product]);
    }
    return (
        <div className='shop-container'>
          <div className="product-container">
          <h1>This is shop</h1>
            {
                products.map(product=><Product 
                  handleAddProduct={handleAddProduct}
                  product={product}>

                  </Product>)
            }          
          </div>
          <div className="cart-container">
              <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Shop;