import React, {useState} from 'react'
import { useContext } from 'react'
import { BookContext, UserContext } from '../context/context'
import { Button, InputGroup, Form } from 'react-bootstrap'
import Book from './Book'

function MainPage() {
  const {user} = useContext(UserContext)

  const [searchInput, setSearchInput] = useState('')
  const [bookArray, setBookArray] = useState([])

async function handleOnSubmit(e) {
  e.preventDefault()
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      let books = data.items.map(e=>{
        if(!e.volumeInfo.authors){
          return
        }
        if(!e.volumeInfo.imageLinks.thumbnail){
          return
        }
        const item = {title: e.volumeInfo.title, author: e.volumeInfo.authors[0], image: e.volumeInfo.imageLinks.thumbnail, pageCount: e.volumeInfo.pageCount, publishedDate: e.volumeInfo.publishedDate, bookId: e.id, selfLink: e.selfLink, previewLink: e.volumeInfo.previewLink, infoLink: e.volumeInfo.infoLink, viewability: e.accessInfo.viewability, publisher: e.volumeInfo.publisher, description: e.volumeInfo.description}
        return item
      })
     setBookArray(books)
     setSearchInput('')
    })
}


  return (
    <div style={{width: '85vw', height:'92vh', overflow: 'auto'}} className='bg-black text-white'>
      
      <div style={{width: '85vw', display: 'flex', justifyContent: 'center'}}>
      <Form id='newsForm' style={{width: '40vw'}} className='pt-5 mb-5' onSubmit={handleOnSubmit}>
        <InputGroup>
        
          <Form.Control placeholder='Search for a book title...' name='book' onChange={(e)=>{setSearchInput(e.target.value)}} value={searchInput} ></Form.Control>
        
        <Button type='submit'>Search</Button>
        </InputGroup>
      </Form>
      </div>
    <div id="bookListContainer" style={{textAlign: 'center'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
          {bookArray.map(book=>(
          <BookContext.Provider value={book} >
            <Book/></BookContext.Provider> 
          ))}
        </div>
    </div>

</div>
  )
}

export default MainPage