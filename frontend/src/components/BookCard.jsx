import {Card,Button} from 'react-bootstrap'
import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {addMyBook,reset} from '../features/mybooks/myBookSlice'
import Spinner from '../components/Spinner'

function BookCard({cover,name,author,genre,rating,bookid}) {

  // const {user}=useSelector(state=>state.auth);
  const {isError,isSuccess,isLoading,message}=useSelector(state=>state.mybooks);

  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }
    if(isSuccess){
      // dispatch(reset())
      navigate('/books')
    }
    // dispatch(reset())
  },[dispatch,isError,isSuccess,navigate,message]);

  const handleClick=()=>{
    dispatch(addMyBook({book:bookid,status:'unread'}));
  }

  if(isLoading){
    return <Spinner/>
  }

  return (
    <Card style={{ width: '18rem' }} className='cardstyle'>
        <Card.Img variant="top" src={cover} />
        <Card.Body className='cardbody'>
            <Card.Title className='fs-2 btitle'>{name}</Card.Title>
            <Card.Text className='fs-4'><span className='cardtitle'>By</span> {author}</Card.Text>
            <Card.Text className='fs-4'><span className='cardtitle'>Genre:</span> {genre}</Card.Text>
            <Card.Text className='fs-4'><span className='cardtitle'>Rating:</span> {rating}/5</Card.Text>
            <Button variant="dark" onClick={handleClick}>Add</Button>
        </Card.Body>
    </Card>
  )
}

export default BookCard