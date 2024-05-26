import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";


export default function SingleOrderDetailsItem() {

    return (
        <tr className="verticle-align-middle text-dark">
            {/* product image */}
            <td>
                <img
                    src="https://static.zara.net/assets/public/fe03/7b75/867a49958fd2/c5c54956fa95/04387401300-e1/04387401300-e1.jpg?ts=1714039203132&w=563"
                    alt="product-img"
                    height={40}
                    width={40}
                    className="rounded-circle"
                />
            </td>
            {/* name */}
            <td>
                <span className="fw-bold">Shirt</span>
                <br />
                <span className="fw-bold">Color: red</span>
            </td>
            {/* price */}
            <td>
                <span className="fw-bold">Price: $33</span>
            </td>
            <td>
                <div className="d-flex justify-content-evenly align-items-center">
                    {/* manage qty */}
                    <div className="qty d-flex align-items-center me-3">

                        <div className="mx-3 my-1 my-lg-0">
                            <h6 className="mb-0">Qty: 44</h6>
                        </div>

                    </div>

                </div>
            </td>
        </tr>
    );
};

