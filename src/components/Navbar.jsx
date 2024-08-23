import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon
} from 'mdb-react-ui-kit';
import { useGetMyProfileQuery } from '../services/user_api';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [openNav, setOpenNav] = useState(false);

    const { data: details, isLoading, error } = useGetMyProfileQuery();

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.assign("/login");
    }


    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>Plaza</MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNav(!openNav)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar open={openNav}>
                    <MDBNavbarNav>

                        {details && details.email ? <>
                            <MDBNavbarItem>
                                <MDBNavbarLink >Profile</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link to="/cart"><MDBNavbarLink >Cart</MDBNavbarLink></Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link to="/order-history"><MDBNavbarLink >Order History</MDBNavbarLink></Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink type="button" onClick={handleLogout}>Logout</MDBNavbarLink>
                            </MDBNavbarItem>
                        </> : <>
                            <MDBNavbarItem>
                                <Link to="/register"><MDBNavbarLink>Register</MDBNavbarLink></Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link to="/login"><MDBNavbarLink >Login</MDBNavbarLink></Link>
                            </MDBNavbarItem>
                        </>}

                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}