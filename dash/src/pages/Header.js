import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./Header.css"

function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"))
  const Navigate = useNavigate();
function logOut() {
  localStorage.clear();
  Navigate("/register")
}
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">KopiQu</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper">
            {
              localStorage.getItem('user-info') ?
              <>
              <Link className='navbar_link' to="/">List Product</Link>
              <Link className='navbar_link' to="/add">Add Product</Link>
              <Link className='navbar_link' to="/update/$id">Update</Link>
              <Link className='navbar_link' to="/search">Search Product</Link>
              </>
              :
              <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>

              </>
            }
            </Nav>
            {localStorage.getItem('user-info') ? 
            <Nav>
              <NavDropdown title={user && user.name}>
              <NavDropdown.ItemText onClick={logOut}>Logout</NavDropdown.ItemText>
              </NavDropdown>
            </Nav>
            :null
          }
        </Container>
      </Navbar>
    </div>
  );
}


export default Header