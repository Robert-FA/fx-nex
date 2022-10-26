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
            <NavDropdown title="Travel" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Travel Trips</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Flights</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Transportations</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Hotels</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                Last Minute Bookings
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Weather" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Globel</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Forcast</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Live Report</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                Latest 
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Rentals" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Holiday Apartments</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Long Term Rentals</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">T</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">H</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                Last Minute Bookings
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="News" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Media</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Trends</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">T</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">H</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                Last Minute Bookings
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sports" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Events</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Latest & Upcoming</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Live Casts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Betting</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                Latest News
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Finance" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Stockmarkets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Crypto</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Trends</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                Latest 
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
