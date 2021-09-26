import React from 'react';
import './Developer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// font awesome icon
const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
const Doctor = (props) => {
    // getting props data by destructuring
    const { developer, handleSalary } = props;
    const { name, dob, email, phone, picture, salary, gender } = developer;
    return (
        // single card design
        <div className="col">
            <div className="card card-details-container h-100">
                <img src={picture.large} className="card-img-top card-image mx-auto" alt="..." />
                {/* card details body */}
                <div className="card-body card-details mx-auto">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><b> Age:</b> {dob.age}</p>
                    <p className="card-text"><b>Gender:</b> {gender}</p>
                    <p className="card-text"><b>E-mail:</b> {email}</p>
                    <p className="card-text"><b>Phone:</b> {phone}</p>
                    <p className="card-text"><b>Monthly Charge:</b> ${salary}</p>
                </div>
                <div>
                    {/* hire me btn */}
                    <button onClick={() => handleSalary(developer)} className="btn btn-primary btn-hire-me">{cartIcon} Hire Me</button>
                </div>
            </div>
        </div >
    );
};

export default Doctor;