import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import ColorCircle from "./ColorCircle";
import SizeBox from "./SizeBox";

const SingleProductCard = () => {

    return (
        <MDBCard className="h-100 shadow" role="button" >
            <MDBCardImage
                src="https://static.zara.net/assets/public/fe03/7b75/867a49958fd2/c5c54956fa95/04387401300-e1/04387401300-e1.jpg?ts=1714039203132&w=563"
                alt="..."
                position="top"
            />
            <MDBCardBody>
                <div className="product-detils">
                    <h5 className="product-name text-dark">BASIC TRAINING T-SHIRT</h5>
                    <h6 className="product-price fw-bold">$15</h6>
                    <p className="stock-left text-danger">
                        <small>Only 34 left</small>
                    </p>
                    <p className="available-sizes">

                        <SizeBox size="M" />
                        <SizeBox size="LG" />
                        <SizeBox size="SM" />

                    </p>
                    <p className="available-colors">
                        <ColorCircle color="red" />
                        <ColorCircle color="green" />
                        <ColorCircle color="blue" />

                    </p>
                </div>
            </MDBCardBody>
        </MDBCard>
    );
};

export default SingleProductCard;