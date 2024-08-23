import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { useGetMyOrderListQuery } from "../services/order_api";
import formatDate from "../helpers/formatDate";
import { Link } from "react-router-dom";

export default function OrderHistory() {

    const { data: details, isLoading, error } = useGetMyOrderListQuery();

    if (isLoading) {
        return <>Loading..</>
    }
    if (error) {
        return <>Error fetching history</>
    }

    // console.log("details ", details);
    return (
        <div className="d-flex flex-wrap">
            {details.orders && details.orders.length > 0 ? details.orders.map((data, ind) => (
                <Link to={`/order-details/${data._id}`}>
                    <MDBCard role="button" className="me-3">
                        <MDBCardBody>
                            <p>Order Id: <span className="text-primary">{data._id}</span> </p>
                            <p>Date: <span className="text-dark">{formatDate(data.created_at)}</span> </p>
                        </MDBCardBody>
                    </MDBCard>
                </Link>
            )
            ) : <p>No order history to show</p>}



        </div>
    )
}