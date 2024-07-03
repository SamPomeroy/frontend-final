import React from 'react'
import { Container, Nav, Navbar as Navs, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/context'

export default function Navbar(props) {
  const {user, setUser} = useContext(UserContext)

  return (
    <Navs expand='lg' className='p-2' bg="dark" variant="dark">
        <Container fluid>
        <Navs.Brand as={Link} to='/'>
          bookNook
        </Navs.Brand>
        <Navs.Toggle />
        <Navs.Collapse className="justify-content-end">
          <Nav >
            {user ? 
            <>
                      
            <Nav.Link as={Link} to='/saved'>Saved</Nav.Link>
            <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
            <Nav.Link onClick={()=>{setUser(null); localStorage.removeItem('jwt')}}>Logout</Nav.Link>

          </>
          :
          <>
          <Nav.Link as={Link} to='/login'>Login</Nav.Link>
          <Nav.Link as={Link} to='/signup'>Signup</Nav.Link>
          </>
          }



          </Nav>
        </Navs.Collapse>
        </Container>
      </Navs>
  )
}