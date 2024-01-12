import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCart, delCart } from '../redux/action';

const Cart = () => {
    const exchangeRate = 81;
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const handleAdd = (item) => {
        dispatch(addCart(item));
    };
    const handleDel = (item) => {
        dispatch(delCart(item));
    };

    const calculateTotalPrice = () => {
        const subtotal = state.reduce((acc, item) => {
            return acc + item.qty * item.price;
        }, 0);

        const shippingCharges = 1;
        const subtotalInRupees = (subtotal * exchangeRate).toFixed(2);
        const shippingChargesInRupees = (shippingCharges * exchangeRate).toFixed(2);
        const totalPrice = subtotal + shippingCharges;
        const totalPriceInRupees = (totalPrice * exchangeRate).toFixed(2);

        return {
            subtotal: subtotalInRupees,
            shippingCharges: shippingChargesInRupees,
            totalPrice: totalPriceInRupees,
        };
    };

    const cartItems = (product) => {
        const priceInRupees = (product.price * exchangeRate).toFixed(2);

        return (
            <div key={product.id} className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">
                                {product.qty} X ₹{priceInRupees} = ₹{(product.qty * priceInRupees).toFixed(2)}
                            </p>
                            <button className="btn btn-outline-dark me-4" onClick={() => handleDel(product)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <button className="btn btn-outline-dark" onClick={() => handleAdd(product)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const totalSection = () => {
        const { subtotal, shippingCharges, totalPrice } = calculateTotalPrice();

        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                        <div className="card p-4">
                            <h4 className="mb-3">Order Summary</h4>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Subtotal:</span>
                                <span>₹{subtotal}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Shipping Fee:</span>
                                <span>₹{shippingCharges}</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <h3>Total:</h3>
                                <h3>₹{totalPrice}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const buttons = () => {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                        <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">
                            Proceed to Checkout
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            {state.length === 0 && (
                <div className="px-4 my-5 bg-light rounded-3 py-5">
                    <div className="container py-4">
                        <div className="row">
                            <h3>Your Cart is Empty</h3>
                        </div>
                    </div>
                </div>
            )}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && totalSection()}
            {state.length !== 0 && buttons()}
        </div>
    );
};

export default Cart;