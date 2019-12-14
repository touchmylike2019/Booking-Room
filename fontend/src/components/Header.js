import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
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
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            เข้าสู่ระบบ
              </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                </DropdownItem>
                            <DropdownItem>
                                Option 2
                </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header