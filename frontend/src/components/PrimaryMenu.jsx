import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function PrimaryMenu() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container fluid>
    <Nav className="mx-auto">
      <Nav.Link><Link to='/' className='router-link text-light hovermode2 smenu'>Home</Link></Nav.Link>
      <Nav.Link><Link to='/books' className='router-link text-light hovermode2 smenu'>Books</Link></Nav.Link>
      <Nav.Link><Link to='/mybooks' className='router-link text-light hovermode2 smenu'>MyPage</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </>
  )
}

export default PrimaryMenu