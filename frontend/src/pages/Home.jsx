import CarousalBooks from '../components/CarousalBooks'
import Books from './Books'
import {Col,Row} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

import ad1 from '../assets/leftpic.jpg'
import ad2 from '../assets/rightpic.jpg'

function Home() {

  const navigate=useNavigate();
  const handleClick=()=>navigate('/books');

  return (
    <>
        <h1 className='text-center h1 my-4 fw-bold'>Welcome to  BOOKtheBOOK</h1>
        <CarousalBooks/>
        <Row className='mt-5 pop' onClick={handleClick}>
          <Col className='d-flex justify-content-center'>
            <img src={ad1} alt='leftside AD' width="470rem" className='finger'/>
          </Col>
          <Col className='d-flex justify-content-center'>
          <img src={ad2} alt='rightside AD' width="470rem" className='finger'/>
          </Col>
        </Row>
        <Books/>
    </>
  )
}

export default Home