import React, { useState } from 'react';
import './header.css';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';
import AppRoutes from '../../appRoutes';
import { NavLink } from 'react-router-dom';
import Profile from '../authentication/profile';

export default function Header() {
    const [showBasic, setShowBasic] = useState(false);
    return (
        <header>
            <MDBNavbar expand='lg' light bgColor='white'>
                <MDBContainer fluid>
                    <MDBNavbarToggler
                        onClick={() => setShowBasic(!showBasic)}
                        aria-controls='navbarExample01'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <MDBIcon fas icon='bars' />
                    </MDBNavbarToggler> 
                    <MDBCollapse navbar show={showBasic} style={{zIndex:"1"}}>
                        <MDBNavbarNav right className='mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/'>
                                    Home
                                </NavLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/business'>Business</NavLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/entertainment'>Entertainment</NavLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/health'>Health</NavLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/science'>Science</NavLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/sports'>Sports</NavLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/technology'>Technology</NavLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>

            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '200px' }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>NEWS CORE</h1>
                            <h4 className='mb-3'>Hub Of Latest News</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Profile/>

            <AppRoutes />

        </header>
    );
}


