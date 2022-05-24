import {Container,Row,Col} from 'react-bootstrap'
import PersonalBookCard from '../components/PersonalBookCard'

function MyBooks() {
  return (
    <Container fluid>
      <h1 className='text-center my-4 mybook-title'>Here are the list of your added books.</h1>

      <div className='book-area'>
        <Row className='my-5'>
          {/* {data.map(dat=>( */}
            <Col sm={12} md={2} className='d-flex justify-content-center my-5'>
              <PersonalBookCard cover='' name='alan' author='pop' genre='asdf' rating='5' key='1' bookid='1'/>
            </Col>
          {/* ))} */}
        </Row>
      </div>
    </Container>
  )
}

export default MyBooks