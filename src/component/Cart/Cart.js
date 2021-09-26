import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCreditCard } from '@fortawesome/free-solid-svg-icons';
// font awesome icon
const userIcon = <FontAwesomeIcon icon={faUser} />;
const creditCardIcon = <FontAwesomeIcon icon={faCreditCard} />;
const Cart = (props) => {
    const { cart, totalPrice } = props;
    return (
        // cart details section 
        <div className="cart-details">
            <h4 className="text-primary fw-bold">{userIcon} Total Developers: {cart.length}</h4>
            <h5 className="fw-bold text-primary">{creditCardIcon} Total Cost: ${totalPrice}</h5>
            {/* added developer list */}
            <h5 className="text-dark fw-bold mt-3">-Added Developer-</h5>
            <div className="name-contianer mt-3">
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