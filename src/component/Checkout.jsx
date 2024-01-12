import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';

const Checkout = () => {
    const navigate = useNavigate();
    const state = useSelector((state) => state.handleCart);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        phone:'',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckout = () => {
        console.log('Checkout:', { ...formData, items: state });
        alert('Your order confirmed. Thanks for ordering !!!');
        navigate('/');
        window.location.reload();
    };

    return (
        <div className="container mt-5">
            <h2>Checkout</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                        Address
                    </label>
                    <textarea
                        className="form-control"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Mobile No
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleCheckout}>
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default Checkout;