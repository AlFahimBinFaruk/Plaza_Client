import { useState } from 'react';
import { MDBCheckbox, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import SingleProductCard from '../components/SingleProductCard';

export default function Home() {
    const [checked, setChecked] = useState(false);
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
                            id='controlledCheckbox'
                            label='One'
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                        />
                        <MDBCheckbox
                            id='controlledCheckbox'
                            label='Two'
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                        />
                    </div>
                </div>
            </div>


            <div className="right-side">
                <MDBRow>
                    <MDBCol className='mb-4' key={3} size="12" md="4" xl="3">
                        <SingleProductCard/>
                    </MDBCol>
                    <MDBCol className='mb-4' key={3} size="12" md="4" xl="3">
                        <SingleProductCard/>
                    </MDBCol>
                    <MDBCol className='mb-4' key={3} size="12" md="4" xl="3">
                        <SingleProductCard/>
                    </MDBCol>
                    <MDBCol className='mb-4' key={3} size="12" md="4" xl="3">
                        <SingleProductCard/>
                    </MDBCol>
                    <MDBCol className='mb-4' key={3} size="12" md="4" xl="3">
                        <SingleProductCard/>
                    </MDBCol>
                </MDBRow>

                <h6 className='text-center text-primary'>Load More</h6>

            </div>
        </div>
    )
}