import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';


const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [cart, setCart] = useState([]);
    let newCart = [];
    useEffect(() => {
        fetch('./doctorsData1.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);
    const handlePrice = (doctor) => {
        newCart = [...cart, doctor];
        setCart(newCart);
    }
    const addFunction = (previousValue, currentValue) => previousValue + currentValue.salary;
    const totalPrice = cart.reduce(addFunction, 0);
    return (
        <div className="container parent-container d-flex">
            <div className="doctors-container row row-cols-1 row-cols-md-3 g-4 col-md-9 mb-3 me-3">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        handlePrice={handlePrice}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
            <div className="cart-container col-md-3 ms-2">
                <h4>Doctors Added: {cart.length}</h4>
                <h5>Total Cost: {totalPrice}</h5>
            </div>
        </div>
    );
};

export default Doctors;