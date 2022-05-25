import {Container,Form,Button,Row,Col} from 'react-bootstrap'
import {useState} from 'react'
import Spinner from '../components/Spinner'
import MasterCard from '../components/MasterCard';

function SearchBook() {

    const [category,setCategory]=useState();
    const [data,setData]=useState([]);
    const [loading,isLoading]=useState(false)

    const getBooks=async()=>{
        isLoading(true)
        const API_URL='/api/books/'
        const response=await fetch(API_URL+category)
        const data=await response.json()
        setData(data)
        isLoading(false)
    }

    const handleSelect=(e)=>{
        setCategory(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        getBooks()

    }

  return (
    <div className=''>
        <Container className='mt-5'>
            <h1 className='display-5 text-center'>Didn't find what you were looking for?</h1>
            <h2 className='text-center mb-5'>Try the searchbar</h2>
            <Form className='text-center' onSubmit={handleSubmit}>
            <Form.Select aria-label="category_select" className='w-50 d-inline' onChange={handleSelect}>
                <option>Select Category</option>
                <option value="Horror">Horror</option>
                <option value="Romance">Romance</option>
                <option value="Comedy">Comedy</option>
                <option value="Thriller">Thriller</option>
                <option value="SciFi">SciFi</option>
                <option value="Adventure">Adventure</option>
                <option value="Comedy">Comedy</option>
            </Form.Select>
            <Button variant="dark" type="submit">Search</Button>
            </Form>
        </Container>
        <Container fluid>
        {loading?<Spinner/>:(
            <Row className='mt-5'>
                {data.map(book=>(
                    <Col md={3} sm={12} className='d-flex justify-content-center'>
                        <MasterCard cover={book.cover} name={book.name} author={book.author} rating={book.rating} genre={book.genre} key={book._id}/>
                    </Col>
                ))}
            </Row>
        )}
        </Container>
    </div>
  )
}

export default SearchBook