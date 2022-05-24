import {Card,Button} from 'react-bootstrap'
import {useState} from 'react'

function BookCard({cover,name,author,genre,rating,bookid}) {

    const [toggle,setToggle]=useState(true)

  const handleClick=()=>{
    setToggle(false)
  }


  return (
    <Card style={{ width: '18rem' }} className='cardstyle'>
        <Card.Img variant="top" src={cover} />
        <Card.Body className='cardbody'>
            <Card.Title className='fs-2 btitle'>{name}</Card.Title>
            <Card.Text className='fs-4'><span className='cardtitle'>By</span> {author}</Card.Text>
            <Card.Text className='fs-4'><span className='cardtitle'>Genre:</span> {genre}</Card.Text>
            <Card.Text className='fs-4'><span className='cardtitle'>Rating:</span> {rating}/5</Card.Text>
            <Button variant="dark" onClick={handleClick}>Read</Button>
            <Button variant="danger ms-2    " onClick={handleClick}>Remove</Button>
        </Card.Body>
    </Card>
  )
}

export default BookCard