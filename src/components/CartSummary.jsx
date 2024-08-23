import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";
import { usePlaceOrderMutation } from "../services/order_api";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

// Define validation schema using Yup
const validationSchema = Yup.object({
    address: Yup.string().required('Delivery address is required'),
});

const CartSummary = () => {
    const [cartItems, setCartItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [placeOrder] = usePlaceOrderMutation();

    // Retrieve cart items from localStorage and calculate subtotal
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cart);

        // Calculate subtotal
        const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
        setSubtotal(total);
    }, []);

    const handleSubmit = async (values, { resetForm }) => {
        try {
            await placeOrder({ address: values.address, order_description: cartItems }).unwrap();
            toast.success('Order placed successfully');
            localStorage.removeItem("cart");
            resetForm();
        } catch (err) {
            console.error(err);
            toast.error('Failed to place order');
        }
    };

    return (
        <MDBCard className="shadow rounded-0">
            <MDBCardBody>
                <MDBCardTitle className="text-dark">Cart Summary</MDBCardTitle>
                {/* product count */}
                <div className="product-count">
                    {/* subtotal */}
                    <div className="d-flex justify-content-between align-items-center mt-4 text-dark">
                        <p className="mb-0">Subtotal</p>
                        <p className="mb-0">
                            <b>${subtotal}</b>
                        </p>
                    </div>

                    {/* Form for address and placing order */}
                    <Formik
                        initialValues={{ address: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {() => (
                            <Form>
                                <Field
                                    as={MDBTextArea}
                                    name="address"
                                    label="Delivery Address"
                                    rows={4}
                                    className="mt-4"
                                />
                                <ErrorMessage name="address" component="div" className="text-danger" />

                                <MDBBtn type="submit" className="rounded-0 mt-2" block>
                                    Place Order
                                </MDBBtn>
                            </Form>
                        )}
                    </Formik>
                </div>
            </MDBCardBody>
        </MDBCard>
    );
};

export default CartSummary;
