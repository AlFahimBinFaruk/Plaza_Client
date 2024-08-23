import { MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ColorCircle from "../components/ColorCircle";
import SizeBox from "../components/SizeBox";
import { useGetProductDetailsQuery } from "../services/product_api";
import { toast } from "react-toastify";

const ProductDetails = () => {
    const params = useParams();
    const product_id = params.product_id;

    const { data: details, isLoading, error } = useGetProductDetailsQuery(product_id);

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [availableQty, setAvailableQty] = useState(0);

    useEffect(() => {
        if (selectedColor) {
            const colorDetails = details.color.find(c => c.name === selectedColor);
            setAvailableQty(colorDetails ? colorDetails.qty : 0);
        }
    }, [selectedColor, details?.color]);

    const handleAddToCart = () => {
        if (!selectedColor || !selectedSize) {
            toast.error("Please select both a color and size.");
            return;
        }

        const cartItem = {
            product_id,
            name: details.name,
            price: details.price,
            product_image_url: details.product_image_url,
            qty: availableQty,
            size: selectedSize,
            color: selectedColor
        };

        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        existingCart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(existingCart));
        toast.success("Product added to cart successfully!");
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching products</div>;
    }

    return (
        <div className="product-details">
            <MDBRow className="align-items-center justify-content-center vh-100">
                {/* left */}
                <MDBCol size="12" md="6" lg="4">
                    <img
                        src={details.product_image_url}
                        alt={details.name}
                        className="border border-warning rounded"
                        height={600}
                    />
                </MDBCol>
                {/* right */}
                <MDBCol size="12" md="6" lg="4">
                    <h5 className="title">{details.name}</h5>
                    <p className="desc">
                        <small>{details.description}</small>
                    </p>
                    <h6 className="category">
                        <span className="text-muted">Category</span>:
                        {details.category_id.name}
                    </h6>
                    <h6 className="price"><span className="text-muted">Price</span>: ${details.price}</h6>
                    <h6 className="availQty">
                        <span className="text-muted">Available Qty</span>: {availableQty}
                    </h6>
                    <div className="size mt-3">
                        <h6>
                            <span className="text-muted">Selected Size</span>: {selectedSize || 'None'}
                        </h6>
                        <p className="available-sizes">
                            {details.product_size.map((size, idx) => (
                                <SizeBox
                                    key={idx}
                                    size={size}
                                    onClick={() => setSelectedSize(size)}
                                />
                            ))}
                        </p>
                    </div>
                    <div className="color mt-3">
                        <h6>
                            <span className="text-muted">Selected Color</span>: {selectedColor || 'None'}
                        </h6>
                        <p className="available-colors">
                            {details.color.map((cr, idx) => (
                                <ColorCircle
                                    key={idx}
                                    color={cr.name}
                                    onClick={() => setSelectedColor(cr.name)}
                                />
                            ))}
                        </p>
                    </div>
                    {/* add to cart btn */}
                    <MDBBtn onClick={handleAddToCart}>Add to cart</MDBBtn>
                </MDBCol>
            </MDBRow>
        </div>
    );
};

export default ProductDetails;
