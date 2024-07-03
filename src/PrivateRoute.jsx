import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/context'
import { Navigate } from 'react-router-dom'

const PrivateRoute=({children}) => {
    const {user} = useContext(UserContext)
    if(!user){
        return <Navigate to='/login'  />
    }
    return children
}

export default PrivateRoute