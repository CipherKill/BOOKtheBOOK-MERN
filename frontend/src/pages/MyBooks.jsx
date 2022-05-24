import {Container,Row,Col} from 'react-bootstrap'
import PersonalBookCard from '../components/PersonalBookCard'
import Spinner from '../components/Spinner'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'

function MyBooks() {

    const [isLoading,setLoading]=useState(true);
    // const [data,setData]=useState([]);
    const [books,setBooks]=useState([]);

    const {user}=useSelector(state=>state.auth);
    const id=user._id;


  const getSavedBooks=async()=>{
      const API_URL='/api/books/'
      const response=await fetch(`/api/mybooks/${id}`)
      const data=await response.json()
      setBooks(data)
      setLoading(false)
  }

  useEffect(()=>{
      getSavedBooks()
  },[])

  if(isLoading){
    return <Spinner/>
  }


  return (
    <Container fluid>
      <h1 className='text-center my-4 mybook-title'>Here are the list of your added books.</h1>
      <div className='book-area'>
        <Row className='my-5'>
           {books.map(book=>(
             <Col sm={12} md={2} className='d-flex justify-content-center my-5'>
             <PersonalBookCard cover={book.cover} name={book.name} author={book.author} genre={book.genre} rating={book.rating} key={book._id} bookid={book._id}/>
           </Col>
           ))}
        </Row>
      </div>
    </Container>
  )
}

export default MyBooks