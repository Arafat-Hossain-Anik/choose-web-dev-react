import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const userIcon = <FontAwesomeIcon icon={faUser} />;
const Cart = (props) => {
    const { cart, totalPrice } = props;
    return (
        <div className="cart-details">
            <h4 className="text-primary">{userIcon} Total Developers: {cart.length}</h4>
            <h5 className="fw-bold text-secondary">Total Cost: ${totalPrice}</h5>
            <div className="name-contianer mt-4">
                {
                    cart.map(person => <h5
                        key={person.id}
                        className="developer-name"
                    >{person.name}</h5>)
                }
            </div>
        </div>
    );
};

export default Cart;