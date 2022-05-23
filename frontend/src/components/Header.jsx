import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Navbar,Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <>
        <Navbar bg='light' variant='light'>
            <Container>
                <Navbar.Brand><Link to='/'className='router-link'>BOOKtheBOOK</Link></Navbar.Brand>
                <Nav className='ms-auto'>
                    <Nav.Link><Link to='/login' className='router-link'><FaSignInAlt/> Login</Link></Nav.Link>
                    <Nav.Link><Link to='/register' className='router-link'><FaUser/> Register</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
  )
}

export default Header