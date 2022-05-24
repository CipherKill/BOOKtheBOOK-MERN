import {Card,Button} from 'react-bootstrap'
import Spinner from './Spinner'

function BookCard({cover,name,author,genre,rating,bookid}) {

    const isLoading=false;

  const handleClick=()=>{
    console.log('click')
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
            <Button variant="danger" onClick={handleClick}>Remove</Button>
        </Card.Body>
    </Card>
  )
}

export default BookCard