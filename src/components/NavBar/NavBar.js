import CartWidget from '../CartWidget/CartWidget.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'; 

const NavBar = () => {
    return (
        <Navbar expand="lg" className=" " sticky='top'>
            <Container fluid className='contenidoNavbar'>
                     <Navbar.Brand href="#" >
                        <img src={require("../assets/logo-cattalina.png")} alt="Logo Cattalina" width={150} />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#">INICIO</Nav.Link>
                            <Nav.Link href="#">PRODUCTOS</Nav.Link>
                            <Nav.Link href="#">NOSOTROS</Nav.Link>
                            <Nav.Link href="#">FAQs</Nav.Link>
                            <Nav.Link href="#">CONTACTO</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                        <CartWidget/>

            </Container>
        </Navbar>
    );
}

export default NavBar;
