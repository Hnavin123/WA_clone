
import React from 'react'
import { useNavigate } from 'react-router-dom';

// const handleLogin = () => {
//    alert("Login with Google");
// }
function Login(props) {
    //const isLoggedIn = props.isLoggedIn;
    const setIsLoggedIn = props.setIsLoggedIn;
    const nevigate = useNavigate();
    const handleLogin = () => {
        setIsLoggedIn(true);
        //alert("Login");
        nevigate('/'); 
    }
  return (
    <div>
        <h2>Login</h2>
        <button onClick={handleLogin}>Login </button>
    </div>
  )
}

export default Login