import { MDBRow, MDBCol, MDBTable, MDBTableBody, MDBIcon } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import CartSummary from "../components/CartSummary";
import { useGetProductDetailsQuery } from "../services/product_api";



const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    // Retrieve cart items from localStorage
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cart);
    }, []);

    console.log("cart",cartItems);



    const handleDeleteItem = (product_id) => {
        // Filter out the item to be removed
        const updatedCartItems = cartItems.filter(item => item.product_id !== product_id);

        // Update local storage
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));

        // Update state
        setCartItems(updatedCartItems);
    };

    return (
        <div className="cart">
            <MDBRow className="align-items-center justify-content-center">
                <h5 className="text-center mb-5">Your Cart</h5>

                <MDBCol size="12" lg="6">
                    <MDBTable borderless>
                        <MDBTableBody>
                            {cartItems.map((product, idx) => (
                                <tr key={idx} className="verticle-align-middle text-dark">
                                    <td>
                                        <img
                                            src={product.product_image_url}
                                            alt={product.name}
                                            height={40}
                                            width={40}
                                            className="rounded-circle"
                                        />
                                    </td>
                                    <td>
                                        <span className="fw-bold">{product.name}</span>
                                        <br />
                                        <span className="fw-bold">Color: {product.color}</span>
                                        <br />
                                        <span className="fw-bold">Size: {product.size}</span>
                                    </td>
                                    <td>
                                        <span className="fw-bold">Price: ${product.price}</span>
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-evenly align-items-center">
                                            <div className="qty d-flex align-items-center me-3">
                                                <div className="mx-3 my-1 my-lg-0">
                                                    <h6 className="mb-0">Qty: {product.qty}</h6>
                                                </div>
                                            </div>
                                            <MDBIcon
                                                fas
                                                icon="trash"
                                                role="button"
                                                color="danger"
                                                onClick={() => handleDeleteItem(product.product_id)}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </MDBTableBody>
                    </MDBTable>
                </MDBCol>
                <MDBCol size="12" lg="3">
                    <CartSummary />
                </MDBCol>
            </MDBRow>
        </div>
    );
};

export default Cart;
