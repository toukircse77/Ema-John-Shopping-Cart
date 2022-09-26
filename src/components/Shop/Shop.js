import React, { useEffect, useState } from 'react';
import Card from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [Products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const hundleAddtoCart =(product)=>{
        const newCart = [...cart,product]
        setCart(newCart);
    }
    return (
        <div className='Shop-container'>
            <div className='Products-container'>
        {
            Products.map(product => <Product 
            key = {product.id}
            product = {product}
            hundleAddtoCart={hundleAddtoCart}
            
            ></Product>)
        }
            </div>
            <div className="Cart-container">
            <Card cart={cart}></Card>
            </div>
        </div>
    );
};

export default Shop;