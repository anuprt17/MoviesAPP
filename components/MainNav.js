import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link  from 'next/link'

export default function MainNav() {
    return (
        //<p>MainNav</p>
        <>
        <Navbar className="fixed-top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Anupreet Kaur</Navbar.Brand>
          <Nav className="me-auto">
          <Link href="/" passHref><Nav.Link>Movies</Nav.Link></Link>
          <Link href="/about" passHref><Nav.Link>About</Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
        </>
    )
  }