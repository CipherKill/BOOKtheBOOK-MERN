import {Card,Button} from 'react-bootstrap'
import {useState} from 'react'

function BookCard({cover,name,author,genre,rating,bookid}) {

    const [displayCard,setDisplayCard]=useState(true)

  const handleClick=(e)=>{
    setDisplayCard(false)
  }

  const handleRead=(e)=>{
    window.location.href="http://www.passuneb.com/elibrary/ebooks/Harry%20Potter%20and%20The%20Sorcerer%E2%80%99s%20Stone.pdf";
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