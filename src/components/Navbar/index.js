import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav , NavbarContainer , NavLogo , MobileIcon , NavMenu , NavItem , NavLinks , NavBtnLink , NavBtn} from './NavbarElement'

const Navbar = () => {
    return (
        <>
        
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                dolla
                </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'> About </NavLinks>       
                    </NavItem>
                    <NavItem>
                        <NavLinks to='Discover'> Discover </NavLinks>       
                    </NavItem>
                    <NavItem>
                        <NavLinks to='Services'> Services </NavLinks>       
                    </NavItem>
                    <NavItem>
                        <NavLinks to='Sign Up'> Sign Up </NavLinks>       
                    </NavItem>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to="/signin">
                    Sign in 
                    </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}
export default Navbar
