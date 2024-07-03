import React, {useState} from 'react'
import { Button, Row, Col, Container, Form } from 'react-bootstrap'
import Axios from '../utils/Axios'
import { isAlphanumeric, isAlpha, isStrongPassword, isEmail, isEmpty } from 'validator'



function Signup() {
    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [username, setUsername] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    
    const handleFirstNameChange=(text)=>{
        setFirstName(text)
        if(!isAlpha(text, 'en-US')){
            setFirstNameError('First Name must contain only letters.')
        }else{
          setFirstNameError('')
        }
    }
    const handleLastNameChange=(text)=>{
        setLastName(text)
        if(!isAlpha(text, 'en-US')){
            setLastNameError('Last Name must contain only letters.')
        }else{
          setLastNameError('')
        }
    }
    const handleUsernameChange=(text)=>{
        setUsername(text)
        if(!isAlphanumeric(text)){
            setUsernameError('Username can only contain letters and numbers')
        }else{
          setUsernameError('')
        }
    }
    const handleEmailChange=(text)=>{
        setEmail(text)
        if(!isEmail(text)){
            setEmailError('Email must be valid')
        }else{
          setEmailError('')
        }
    }
    const handlePasswordChange=(text)=>{
        setPassword(text)
        if(!isStrongPassword(text)){
            setPasswordError('Password must contain 1 uppercase, 1 lowercase, 1 special char & 1 num')
        }else{
          setPasswordError('')
        }
    }
    const handleConfirmPasswordChange=(text)=>{
        setConfirmPassword(text)
        if(password !== confirmPassword){
            setConfirmPasswordError('Password must match')
        }else{
            setConfirmPasswordError('')
        }

    }



    async function handleOnSubmit(e){
        e.preventDefault()
        if(!firstNameError && !lastNameError && !usernameError && !passwordError && !emailError && !confirmPasswordError){
        try {
           const user = await Axios.post('/signup', {
            firstName, 
            lastName,
            username,
            email,
            password
           }) 
           console.log(user)
        } catch (error) {
            console.log(error)
        }
     }
     setFirstName('')
     setLastName('')
     setPassword('')
     setUsername('')
     setEmail('')
     setConfirmPassword('')
    }


  return (
    <div style={{width: '100vw', height: '92vh'}} className='bg-black text-white'>
    <Container fluid style={{display: 'flex', justifyContent: 'center', alignItems:'center', height: '100%'}}>
        <Form style={{width: '70vw'}} onSubmit={handleOnSubmit} >
            <Row>
                <Col>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control required name='firstName' value={firstName} onChange={(e)=>{handleFirstNameChange(e.target.value)}}></Form.Control>
                    <Form.Text className='text-white'>{firstNameError}</Form.Text>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control required name='lastName' value={lastName} onChange={(e)=>{handleLastNameChange(e.target.value)}}></Form.Control>
                    <Form.Text className='text-white'>{lastNameError}</Form.Text>
                </Form.Group>
                </Col>
            </Row>
            <Form.Group>
            <Form.Label>Username</Form.Label>
                    <Form.Control required name='username' value={username} onChange={(e)=>{handleUsernameChange(e.target.value)}}></Form.Control>
                    <Form.Text className='text-white'>{usernameError}</Form.Text>

            </Form.Group>
            <Form.Group>
            <Form.Label>Email</Form.Label>
                    <Form.Control required type='email' name='email' value={email} onChange={(e)=>{handleEmailChange(e.target.value)}}></Form.Control>
                    <Form.Text className='text-white'>{emailError}</Form.Text>

            </Form.Group>
            <Row>
                <Col>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type='password' name='password' value={password} onChange={(e)=>{handlePasswordChange(e.target.value)}}></Form.Control>
                    <Form.Text className='text-white'>{passwordError}</Form.Text>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control required type='password' name='confirmPassword' value={confirmPassword} onChange={(e)=>{handleConfirmPasswordChange(e.target.value)}}></Form.Control>
                    <Form.Text className='text-white'>{confirmPasswordError}</Form.Text>
                </Form.Group>
                </Col>
            </Row>
            <Button className='mt-3' type='submit'>Submit</Button>


        </Form>
    </Container>

</div>

  )
}

export default Signup