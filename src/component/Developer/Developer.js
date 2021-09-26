import React from 'react';
import './Developer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
const Doctor = (props) => {
    const { developer, handlePrice } = props;
    const { name, dob, email, phone, picture, salary, gender } = developer;
    // console.log(developer.id);
    return (
        <div className="col">
            <div className="card card-details-container h-100">
                <img src={picture.large} className="card-img-top card-image mx-auto" alt="..." />
                <div className="card-body card-details mx-auto">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><b> Age:</b> {dob.age}</p>
                    <p className="card-text"><b>Gender:</b> {gender}</p>
                    <p className="card-text"><b>E-mail:</b> {email}</p>
                    <p className="card-text"><b>Phone:</b> {phone}</p>
                    <p className="card-text"><b>Salary:</b> ${salary}</p>
                </div>
                <div>
                    <button onClick={() => handlePrice(developer)} className="btn btn-primary btn-hire-me">{cartIcon} Hire Me</button>
                </div>
            </div>
        </div >
    );
};

export default Doctor;