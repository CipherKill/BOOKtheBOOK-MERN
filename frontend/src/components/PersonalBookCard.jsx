import {Card,Button} from 'react-bootstrap'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function BookCard({cover,name,author,genre,rating,bookid}) {

    const [displayCard,setDisplayCard]=useState(true)
    const navigate=useNavigate()

  const handleClick=(e)=>{
    setDisplayCard(false)
  }

  const handleRead=(e)=>{
    navigate('/thebook')
  };

if(displayCard){
  return (
    <Card style={{ width: '18rem'}} className='cardstyle'>
        <Card.Img variant="top" src={cover} />
        <Card.Body className='cardbody'>
            <Card.Title className='fs-2 btitle'>{name}</Card.Title>
            <Card.Text className='fs-4'><span className='cardtitle'>By</span> {author}</Card.Text>
            <Card.Text className='fs-4'><span className='cardtitle'>Genre:</span> {genre}</Card.Text>
            <Card.Text className='fs-4'><span className='cardtitle'>Rating:</span> {rating}/5</Card.Text>
            <Button variant="dark" onClick={handleRead}>Read</Button>
            <Button variant="danger" onClick={handleClick} className='ms-2'>Remove</Button>
        </Card.Body>
    </Card>
  )
}
}

export default BookCard