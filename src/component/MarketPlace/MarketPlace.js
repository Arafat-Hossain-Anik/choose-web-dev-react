import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './MarketPlace.css';


const MarketPlace = () => {
    // state for getting data from api
    const [developers, setDevelopers] = useState([]);
    // state for update the cart state
    const [cart, setCart] = useState([]);
    let newCart = [];
    // fetching data from api
    useEffect(() => {
        fetch('./developersData1.json')
            .then(res => res.json())
            .then(data => setDevelopers(data));
    }, []);
    // handle card button click event
    const handleSalary = (developer) => {
        // handling duplicate data
        if (cart.indexOf(developer) === -1) {
            newCart = [...cart, developer];
            setCart(newCart);
        }
    }
    // total cost function
    const addFunction = (previousValue, currentValue) => previousValue + currentValue.salary;
    const totalPrice = cart.reduce(addFunction, 0);
    return (
        // MarketPlace
        <div className="container marker-place d-flex">
            {/* developers container */}
            <div className="developers-container row row-cols-1 row-cols-md-3 g-4 col-md-9 mb-3 me-3">
                {
                    developers.map(developer => <Developer
                        key={developer.id}
                        handleSalary={handleSalary}
                        developer={developer}
                    ></Developer>)
                }
            </div>
            {/* cart container */}
            <div className="cart-container col-md-3 ms-2">
                <Cart totalPrice={totalPrice} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default MarketPlace;