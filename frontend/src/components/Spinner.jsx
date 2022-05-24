import Loading from '../assets/loading.gif'
import {Container} from 'react-bootstrap'

function Spinner() {
  return (
      <Container className='d-flex justify-content-center mt-5'>
          <img src={Loading} alt='loading...'/>
      </Container>
  )
}

export default Spinner