import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Navbar,Container, Nav} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {logout,reset} from '../features/auth/authSlice'

function Header() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {user}=useSelector(state=>state.auth);

    const onLogout=()=>{
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    }

  return (
        <Navbar bg='light' variant='light'>
            <Container fluid>
                <Navbar.Brand><Link to='/'className='router-link text-black hovermode1 ms-5'>BOOKtheBOOK</Link></Navbar.Brand>
                <Nav className='ms-auto'>
                    {user?(
                        <Nav.Link className='logout-btn text-white me-5' onClick={onLogout}><FaSignOutAlt/> Logout</Nav.Link>
                    ):(
                    <>
                    <Nav.Link><Link to='/login' className='router-link text-black hovermode1'><FaSignInAlt/> Login</Link></Nav.Link>
                    <Nav.Link><Link to='/register' className='router-link text-black hovermode1'><FaUser/> Register</Link></Nav.Link>
                    </>
                    )}
                </Nav>
            </Container>
        </Navbar>
  )
}

export default Header