import React, { useContext } from 'react'
import { BookContext } from '../context/context'
import { Card } from 'react-bootstrap'


export default function Book() {
    const book = useContext(BookContext)
    console.log(book)
  return (
    <Card style={{width:'12rem', margin:'15px'}}>
        <div style={{height: '80%'}}><Card.Img style={{width: '100%'}} variant='top' src={book.image} /></div>
        <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Subtitle>{book.author}</Card.Subtitle>
        </Card.Body>
    </Card>
  )
}
