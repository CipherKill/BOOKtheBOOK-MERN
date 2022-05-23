import {Carousel} from 'react-bootstrap'
import carousal0 from '../assets/carousal0.jpg'
import carousal1 from '../assets/carousal1.jpg'
import carousal2 from '../assets/carousal2.jpg'
import carousal3 from '../assets/carousal3.jpg'

function CarousalBooks() {
  return (
    <Carousel className=''>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={carousal0}
            alt="First slide"
        />
        {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={carousal1}
            alt="Second slide"
        />
    
        {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={carousal2}
            alt="Third slide"
        />
    
        {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={carousal3}
            alt="Third slide"
        />
    
        {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
  </Carousel>
  )
}

export default CarousalBooks