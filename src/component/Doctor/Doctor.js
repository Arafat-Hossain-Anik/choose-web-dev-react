import React from 'react';
import './Doctor.css';

const Doctor = (props) => {
    const { doctor, handlePrice } = props;
    const { name, dob, email, phone, picture, salary, gender } = doctor;
    console.log(doctor.id);
    return (
        <div className="col">
            <div className="card card-details-container h-100">
                <img src={picture.large} className="card-img-top card-image mx-auto" alt="..." />
                <div className="card-body card-details mx-auto">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Age: {dob.age}</p>
                    <p className="card-text">Gender: {gender}</p>
                    <p className="card-text">E-mail: {email}</p>
                    <p className="card-text">Phone: {phone}</p>
                    <p className="card-text">Salary: ${salary}</p>
                </div>
                <div>
                    <button onClick={() => handlePrice(doctor)} className="btn btn-warning btn-hire-me">Hire Me</button>
                </div>
            </div>
        </div >
    );
};

export default Doctor;