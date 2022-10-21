import './App.css';
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";     

function App() {
  return (
    <div className="App">
      <header>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Fx-Nex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sounds</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Clips
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Connect</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  <main>
  <Container>
      <Row className="px-4 my-5">
        <Col sm={7}>



        </Col>
        <Col sm={5}>sm=4</Col>
      </Row>
    </Container>
  </main>
    </div>
  );
}

export default App;
