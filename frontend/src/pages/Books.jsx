import BookCard from '../components/BookCard'
import {Row,Col} from 'react-bootstrap'
import {useState,useEffect} from 'react'
import Spinner from '../components/Spinner'

function Books() {

  const [data,setData]=useState([]);
  const [isLoading,setLoading]=useState(true);

  const getBooks=async()=>{
    const response=await fetch('/api/books/all');
    const data=await response.json();
    setData(data);
    setLoading(false);
  };

  useEffect(()=>{
    getBooks();
  },[]);

  if(isLoading){
    return (
      <Spinner/>
    );
  }
  else{
    return (
      <div className='book-area'>
        <Row className='my-5'>
          {data.map(dat=>(
            <Col sm={12} md={2} className='d-flex justify-content-center my-5'>
              <BookCard cover={dat.cover} name={dat.name} author={dat.author} genre={dat.genre} rating={dat.rating} key={dat._id} bookid={dat._id}/>
            </Col>
          ))}
        </Row>
      </div>
    )
    }
}

export default Books