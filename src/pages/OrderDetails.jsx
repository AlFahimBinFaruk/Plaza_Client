import { MDBCol, MDBTable, MDBTableBody, MDBInput, MDBBtn } from "mdb-react-ui-kit";

import SingleOrderDetailsItem from "../components/SingleOrderDetailsItem";

export default function OrderDetails() {

    return (
        <MDBCol size="12" lg="6" className="mx-auto">

            <h6 className="mb-4">Order Id: 442eddd</h6>
            <MDBTable>
                {/* table body */}
                <MDBTableBody>
                    <SingleOrderDetailsItem />
                    <SingleOrderDetailsItem />
                    <SingleOrderDetailsItem />
                </MDBTableBody>
            </MDBTable>
            <div className="my-5">
                <h6>
                    <span className="text-muted">Total:</span>$33
                </h6>
                <h6>
                    <span className="text-muted"> order status:</span>
                    Pending
                </h6>
                <h6>
                    <span className="text-muted">payment status:</span>
                    Pending
                </h6>
                <h6>
                    <span className="text-muted">order type:</span>
                    COD
                </h6>
                <h6>
                    <span className="text-muted">address:</span>
                    something
                </h6>
                <h6>
                    <span className="text-muted">email:</span>
                    john@gmail.com
                </h6>
            </div>

            {/* if we don't have tran id yet we will show this otherwise we will show the tran id */}
            <div>
                <small>Send Total : $33 to <b>01810258975</b> and give the transaction id below </small>
                <MDBInput
                    type="number"
                    id="tran_id"
                    wrapperClass="mb-2"
                    label="Transaction id"
                    size="sm"
                />
                <MDBBtn block size="sm">Save</MDBBtn>
            </div>


        </MDBCol>
    );
};

