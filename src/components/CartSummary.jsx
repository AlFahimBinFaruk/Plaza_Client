import { MDBCard, MDBCardBody, MDBCardTitle, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";

const CartSummary = () => {


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
                            <b>$99</b>
                        </p>
                    </div>

                    <MDBTextArea
                        label="Delivery Address"
                        id="address"
                        className="mt-4"
                        rows={4}
                        size="sm"
                    />

                    <MDBBtn className="rounded-0 mt-2" block>
                        Place Order
                    </MDBBtn>
                </div>
            </MDBCardBody>
        </MDBCard>
    );
};

export default CartSummary;