import { MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";

import ColorCircle from "../components/ColorCircle";
import SizeBox from "../components/SizeBox";


const ProductDetails = () => {

    return (
        <div className="product-details">

            <MDBRow className="align-items-center justify-content-center vh-100">
                {/* left */}
                <MDBCol size="12" md="6" lg="4">
                    <img
                        src="https://static.zara.net/assets/public/fe03/7b75/867a49958fd2/c5c54956fa95/04387401300-e1/04387401300-e1.jpg?ts=1714039203132&w=563"
                        alt=""
                        className="border border-warning rounded"
                        height={600}
                    />
                </MDBCol>
                {/* right */}
                <MDBCol size="12" md="6" lg="4">
                    <h5 className="title">BASIC TRAINING T-SHIRT</h5>
                    <p className="desc">
                        <small>T-shirt made of a technical lightweight stretch fabric.</small>
                    </p>
                    <h6 className="category">
                        <span className="text-muted">Category</span>:
                        T-Shirt
                    </h6>
                    <h6 className="price"><span className="text-muted">Price</span>: $34</h6>
                    <h6 className="availQty">
                        <span className="text-muted">Available Qty</span>: 34
                    </h6>
                    <div className="size mt-3">
                        <h6>
                            <span className="text-muted">Selected Size</span> :
                            None
                        </h6>
                        <p className="available-sizes">
                            <SizeBox size="M" />
                            <SizeBox size="LG" />
                            <SizeBox size="SM" />
                        </p>
                    </div>
                    <div className="color mt-3">
                        <h6>
                            <span className="text-muted">Selected Color</span>:
                            None
                        </h6>
                        <p className="available-colors">
                            <ColorCircle color="red" />
                            <ColorCircle color="green" />
                            <ColorCircle color="blue" />
                        </p>
                    </div>
                    {/* add to cart btn */}
                    <MDBBtn >Add to cart</MDBBtn>
                </MDBCol>
            </MDBRow>

        </div>
    );
};

export default ProductDetails;