import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookDetails from "./components/BookDetails";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import PrivateRoute from "./PrivateRoute";
import Category from "./components/Category";
import Bookshelf from "./components/Bookshelf";
import { Button, Col, Container } from "react-bootstrap";
import Profile from "./components/Profile";
import { NavLink } from "react-router-dom";

const bookCategories = ['Thriller', 'Fantasy', 'Science Fiction', 'Romance', 'Biography', 'Mystery', 'Horror', 'Crime', 'Classics']


function Layout() {
  return (
    <>
    <Navbar/>
    <div style={{display: 'flex'}}>
        <Col style={{width: '15vw', height: '92vh', backgroundColor: 'purple'}}>
        <Container fluid style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {bookCategories.map(e=>(
            <Button as={NavLink} to={`/category/${encodeURI(e)}`} key={e} style={{borderRadius: '15px'} }variant='outline-light'>{e}</Button>

            ))}
            </Container></Col>
        <Outlet/></div>
    </>
  )
}

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                
                element: <PrivateRoute><MainPage/></PrivateRoute>

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
            },
            {
                path: '/category/:categoryName',
                element: <Category/>
            },
            {
                path: '/bookshelf',
                element: <Bookshelf/>
            },
            {
                path: '/profile',
                element: <Profile/>
            }
        ]
    }
])
export default router