import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";

export default function OrderHistory() {
    return (
        <div className="d-flex flex-wrap">
            <MDBCard role="button" className="me-3">
                <MDBCardBody>
                    <p>Order Id: <span className="text-primary">3432324ddd</span> </p>
                    <p>Date: <span className="text-dark">12th july,2024</span> </p>
                </MDBCardBody>
            </MDBCard>
            <MDBCard role="button" className="me-3">
                <MDBCardBody>
                    <p>Order Id: <span className="text-primary">3432324ddd</span> </p>
                    <p>Date: <span className="text-dark">12th july,2024</span> </p>
                </MDBCardBody>
            </MDBCard>
            <MDBCard role="button" className="me-3">
                <MDBCardBody>
                    <p>Order Id: <span className="text-primary">3432324ddd</span> </p>
                    <p>Date: <span className="text-dark">12th july,2024</span> </p>
                </MDBCardBody>
            </MDBCard>
            <MDBCard role="button" className="me-3">
                <MDBCardBody>
                    <p>Order Id: <span className="text-primary">3432324ddd</span> </p>
                    <p>Date: <span className="text-dark">12th july,2024</span> </p>
                </MDBCardBody>
            </MDBCard>
            
        </div>
    )
}