import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Navbar,Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function Header() {
  return (
        <Navbar bg='light' variant='light'>
            <Container fluid>
                <Navbar.Brand><Link to='/'className='router-link text-black hovermode1'>BOOKtheBOOK</Link></Navbar.Brand>
                <Nav className='ms-auto'>
                    <Nav.Link><Link to='/login' className='router-link text-black hovermode1'><FaSignInAlt/> Login</Link></Nav.Link>
                    <Nav.Link><Link to='/register' className='router-link text-black hovermode1'><FaUser/> Register</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
  )
}

export default Header