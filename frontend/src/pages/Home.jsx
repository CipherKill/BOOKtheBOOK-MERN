import CarousalBooks from '../components/CarousalBooks'
import Books from './Books'
import {Col,Row} from 'react-bootstrap'

import ad1 from '../assets/leftpic.jpg'
import ad2 from '../assets/rightpic.jpg'

function Home() {
  return (
    <>
        <h1 className='text-center h1 my-4 fw-bold'>Welcome to  BOOKtheBOOK</h1>
        <CarousalBooks/>
        <Row className='mt-5 pop'>
          <Col className='d-flex justify-content-center'>
            <img src={ad1} alt='leftside AD'/>
          </Col>
          <Col className='d-flex justify-content-center'>
          <img src={ad2} alt='rightside AD'/>
          </Col>
        </Row>
        <Books/>
    </>
  )
}

export default Home