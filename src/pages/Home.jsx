import { useState } from 'react';
import { MDBCheckbox, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import SingleProductCard from '../components/SingleProductCard';
import { useGetProductListQuery } from '../services/product_api';
import SizeBox from '../components/SizeBox';
import ColorCircle from '../components/ColorCircle';
import { Link } from 'react-router-dom';

export default function Home() {
    const [checked, setChecked] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const { data: details, isLoading, error } = useGetProductListQuery({ page: currentPage });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching products</div>;
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    console.log("details ", details);

    return (
        <div className="d-flex">
            <div className="left-side me-3 w-30">
                <div className='mb-3'>
                    <form className='d-flex input-group w-auto'>
                        <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                    </form>
                </div>
                <div className="categories">
                    <h6>Categories</h6>
                    <div>
                        <MDBCheckbox
                            id='categoryOne'
                            label='One'
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                        />
                        <MDBCheckbox
                            id='categoryTwo'
                            label='Two'
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                        />
                    </div>
                </div>
            </div>

            <div className="right-side w-100">
                <MDBRow>
                    {details.products.length > 0 ? (
                        details.products.map((product, index) => (
                            <Link to={`/product-details/${product._id}`}>

                                <MDBCol className='mb-4' key={product._id} size="14" md="5" xl="3">
                                    <MDBCard className="h-100 shadow" role="button">
                                        <MDBCardImage
                                            src={product.product_image_url || "https://via.placeholder.com/150"}
                                            alt={product.name}
                                            position="top"
                                        />
                                        <MDBCardBody>
                                            <div className="product-details">
                                                <h5 className="product-name text-dark">{product.name}</h5>
                                                <h6 className="product-price fw-bold">${product.price}</h6>
                                                {/* <p className="stock-left text-danger">
                                                <small>Only {product.qty} left</small>
                                            </p> */}
                                                <p className="available-sizes">
                                                    {product.product_size.map((size, idx) => (
                                                        <SizeBox key={idx} size={size} />
                                                    ))}
                                                </p>
                                                <p className="available-colors">
                                                    {product.color.map((cr, idx) => (
                                                        <ColorCircle key={idx} color={cr.name} />
                                                    ))}
                                                </p>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </Link>
                        ))
                    ) : (
                        <p>No products to show</p>
                    )}
                </MDBRow>

                <div className="pagination-controls mt-5 mx-auto">
                    <MDBBtn
                        disabled={currentPage <= 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                        size="sm"
                    >
                        Previous
                    </MDBBtn>
                    <span className="mx-3">Page {currentPage}</span>
                    <MDBBtn
                        disabled={details.totalPages <= currentPage}
                        onClick={() => handlePageChange(currentPage + 1)}
                        size="sm"
                    >
                        Next
                    </MDBBtn>
                </div>
            </div>
        </div>
    );
}
