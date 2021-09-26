import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './MarketPlace.css';


const MarketPlace = () => {
    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);
    let newCart = [];
    useEffect(() => {
        fetch('./developersData1.json')
            .then(res => res.json())
            .then(data => setDevelopers(data));
    }, []);
    const handlePrice = (developer) => {
        console.log("printed from click", developer);
        if (cart.indexOf(developer) === -1) {
            newCart = [...cart, developer];
            setCart(newCart);
        }
    }
    const addFunction = (previousValue, currentValue) => previousValue + currentValue.salary;
    const totalPrice = cart.reduce(addFunction, 0);
    return (
        <div className="container parent-container d-flex">
            <div className="developers-container row row-cols-1 row-cols-md-3 g-4 col-md-9 mb-3 me-3">
                {
                    developers.map(developer => <Developer
                        key={developer.id}
                        handlePrice={handlePrice}
                        developer={developer}
                    ></Developer>)
                }
            </div>
            <div className="cart-container col-md-3 ms-2">
                <Cart totalPrice={totalPrice} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default MarketPlace;