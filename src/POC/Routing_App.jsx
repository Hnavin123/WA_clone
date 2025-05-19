import { Navigate, Route,Routes } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import Home from './Home'
import Login from './Login'

function Routing_App() {
    const[isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
        <div>Routing_App</div>
        <Routes>
            <Route path='/' element={<ProtectedRoute isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}></ProtectedRoute>} />
            <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
    </>
  )
}
function ProtectedRoute(props) {
   const isLoggedIn = props.isLoggedIn;
   const setIsLoggedIn = props.setIsLoggedIn;
    if(isLoggedIn) {
        return <Home setIsLoggedIn={setIsLoggedIn}/>
    }
    else {
        return <Navigate to='/login' />
    }
}

export default Routing_App