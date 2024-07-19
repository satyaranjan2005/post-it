
import './App.css'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Navbar from './components/navbar/Navbar'
import Leftbar from './components/leftbar/Leftbar'
import Rightbar from './components/rightbar/Rightbar'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";

function App() {

  const currentUser = true;
  
  const Layout = () =>{
    return (
      <div>
        <Navbar/>
        <div>
          <Leftbar/>
          <Outlet/>
          <Rightbar/>
        </div>
      </div>
    );
  }

  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to="/login" />
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:( 
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute> 
      ),
      children: [{
        path: '/home',
        element: <Home/>
      },
      {
        path: '/profile/:id',
        element: <Profile/>
      }]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
