import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookDetails from "./components/BookDetails";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MainPage from "./components/MainPage";


function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                
                element: <MainPage/>

            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/book/:bookId',
                element: <BookDetails/>
            }
        ]
    }
])
export default router