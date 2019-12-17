import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">ระบบจองห้องประชุมออนไลน์</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">หน้าหลัก</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/list">รายการห้องประชุม</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/login">เข้าสู่ระบบ</NavLink>
                    </NavItem><NavItem>
                        <NavLink href="/register">สมัครสมาชิก</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header