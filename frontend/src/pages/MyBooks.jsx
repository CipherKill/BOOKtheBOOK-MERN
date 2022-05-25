import {Container,Row,Col} from 'react-bootstrap'
import PersonalBookCard from '../components/PersonalBookCard'
import Spinner from '../components/Spinner'
import {useState,useEffect} from 'react'
import {useSelector} from 'react-redux'

function MyBooks() {

    const [isLoading,setLoading]=useState(true);
    const [books,setBooks]=useState([]);

    const {user}=useSelector(state=>state.auth);
    const id=user._id;


  const getSavedBooks=async()=>{
      const response=await fetch(`/api/mybooks/${id}`)
      const data=await response.json()
      setBooks(data)
      setLoading(false)
  }

  const reloadpage=()=>window.location.reload();

  useEffect(()=>{
      getSavedBooks()
  })

  if(isLoading){
    return <Spinner/>
  }

  return (
    <Container fluid>
      <h1 className='text-center mt-5 mybook-title'>Here are the list of your added books.</h1>
      <p className='text-center'>Something seems off?, click <span className='mybook-fix' onClick={reloadpage}>here</span> to fix</p>
      <div className='book-area'>
        <Row className='my-1'>
           {books.map(book=>(
             <Col sm={12} md={4} className='d-flex justify-content-center'>
             <PersonalBookCard cover={book[0].cover} name={book[0].name} author={book[0].author} genre={book[0].genre} rating={book[0].rating} key={book[0]._id} bookid={book[0]._id}/>
           </Col>
           ))}
        </Row>
      </div>
    </Container>
  )
}

export default MyBooks