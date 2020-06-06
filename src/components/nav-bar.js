import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../store/actions/user.action';
import { connect } from 'react-redux'

import { userIsNotAuthenticated, userIsAuthenticated } from '../config/auth';

// const LoginLink = userIsNotAuthenticated(() => (
//   <Nav.Item>
//     <LinkContainer to="/login">
//       <Nav.Link eventKey="/login">
//         Login
//       </Nav.Link>
//     </LinkContainer>
//   </Nav.Item>
// ))
const LogoutLink = userIsAuthenticated(({ logout }) => (
  <Nav.Item><div className="nav-link" onClick={logout}>Logout</div></Nav.Item>
))

function NavBar({ user, logout }) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <LinkContainer to="/dashboard">
          <Navbar.Brand>
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Capaz
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end">
            <LinkContainer to="/dashboard">
              <Nav.Link eventKey="/dashboard">
                Dashboard
              </Nav.Link>
            </LinkContainer>
            <NavDropdown title="Category" id="category-dropdown">
              <LinkContainer to="/categories">
                <NavDropdown.Item eventKey="/categories">Categories</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/create">
                <NavDropdown.Item eventKey="/category/create">Create Category</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Item" id="item-dropdown">
              <LinkContainer to="/items">
                <NavDropdown.Item eventKey="/items">Items</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/item/create">
                <NavDropdown.Item eventKey="/item/create">Create Item</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Order" id="item-dropdown">
              <LinkContainer to="/orders">
                <NavDropdown.Item eventKey="/orders">Orders</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/order/create">
                <NavDropdown.Item eventKey="/order/create">Create Order</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <Nav.Item>
              <LinkContainer to="/users">
                <Nav.Link eventKey="/users">
                  Users
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <NavDropdown title="You" id="account-dropdown" alignRight>
              <LinkContainer to="/user/1/change-role">
                <NavDropdown.Item eventKey="/user/1/change-role">Change Role</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LogoutLink logout={logout}/>
            {/* <NavDropdown title="You" id="account-dropdown" alignRight>
              <LinkContainer to="/user/1/change-role">
                <NavDropdown.Item eventKey="/user/1/change-role">Change Role</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/logout">
                <NavDropdown.Item eventKey="/logout">Logout</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown> */}
            {/* <Nav.Item>
              <LinkContainer to="/login">
                <Nav.Link eventKey="/login">
                  Login
                </Nav.Link>
              </LinkContainer>
            </Nav.Item> */}
            {/* <Nav.Item>
              <LinkContainer to="/register">
                <Nav.Link eventKey="/register">
                  Register
                </Nav.Link>
              </LinkContainer>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { logout })(NavBar);