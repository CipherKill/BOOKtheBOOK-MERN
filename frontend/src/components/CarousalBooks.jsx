import {Carousel} from 'react-bootstrap'
import carousal0 from '../assets/carousal0.jpg'
import carousal1 from '../assets/carousal1.jpg'
import carousal2 from '../assets/carousal2.jpg'
import carousal3 from '../assets/carousal3.jpg'
import {useNavigate} from 'react-router-dom'

function CarousalBooks() {
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate('/books')
    }

  return (
    <Carousel className='finger' onClick={handleClick}>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={carousal0}
            alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={carousal1}
            alt="Second slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={carousal2}
            alt="Third slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={carousal3}
            alt="Third slide"
        />
        </Carousel.Item>
  </Carousel>
  )
}

export default CarousalBooks