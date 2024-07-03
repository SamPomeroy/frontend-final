import router from "./Router"
import { RouterProvider } from "react-router-dom"
import { UserContext } from "./context/context"
import { useState } from "react"
import checkIfUserIsAuth from "./utils/checkUser"
import {jwtDecode} from 'jwt-decode'


function App() {
  const [user, setUser] = useState(null)
  if(!user && checkIfUserIsAuth()){
    const actualUser = jwtDecode(localStorage.getItem('jwt'))
    setUser(actualUser)
  }
  return (
   <>
   <UserContext.Provider value={{user, setUser}}>
    <RouterProvider router={router}/>
    </UserContext.Provider>
   </>
  )
}

export default App