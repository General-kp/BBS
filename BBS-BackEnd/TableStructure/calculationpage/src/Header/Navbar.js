import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

function Navbarmenu() {
  return (
    <Navbar collapseOnSelect expand="lg" className="menu">
      <Container>
        <Navbar.Brand href="#home" className='menu-title'>MITE x SW</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className='menu-items'>
          <NavDropdown title="File" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">File</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Save
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">save as</NavDropdown.Item>
              <NavDropdown.Divider />   
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          <Nav.Link href="#save">Save</Nav.Link>
            <Nav.Link href="#open">Open</Nav.Link>
            <Nav.Link href="#help">Help</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link eventKey={2} href="#logout" className='logout-button'>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarmenu;