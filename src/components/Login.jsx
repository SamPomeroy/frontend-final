import React, {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import Axios from '../utils/Axios'
import { useContext } from 'react'
import { UserContext } from '../context/context'
import {jwtDecode} from 'jwt-decode'
import checkIfUserIsAuth from '../utils/checkUser'
import { Navigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {user, setUser} = useContext(UserContext)
    if(user){
        return <Navigate to='/' />
    }

    async function handleOnSubmit(e){
        e.preventDefault()
        try {
            const user = await Axios.post('/login', {username, password})
            const actualUser = jwtDecode(user.data.payload)
            localStorage.setItem('jwt', user.data.payload)
            setUser(actualUser)
        } catch (error) {
            console.log(error)
        }
        setUsername('')
        setPassword('')
    }


  return (
    <Container className='bg-black text-white'  fluid style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '92vh'}}>
    <Form style={{width:'50vw'}} onSubmit={handleOnSubmit}>
        <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control required name='username' value={username} onChange={(e)=>setUsername(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control required type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type='submit' className='mt-3'>Submit</Button>

    </Form>
</Container>



  )
}

export default Login