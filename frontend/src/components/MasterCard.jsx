import {Card,Button} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {addMyBook} from '../features/mybooks/myBookSlice'
import {toast} from 'react-toastify'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function MasterCard({cover,name,author,genre,rating,bookid}) {

  const {isError,isSuccess,message}=useSelector(state=>state.mybooks);

  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }
    if(isSuccess){
      navigate('/mybooks')
    }
  },[dispatch,isError,isSuccess,message,navigate]);

  const handleClick=()=>{
    dispatch(addMyBook({book:bookid,status:'unread'}));
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

export default MasterCard