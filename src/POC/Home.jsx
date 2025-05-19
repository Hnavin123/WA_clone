
import React from 'react'
// const handleLogout = () => {
//    alert("Logout");
// }
function Home(props) {
    const setIsLoggedIn = props.setIsLoggedIn;
    function handleLogout() {
        setIsLoggedIn(false);
        alert("Logout");
    }
  return (
    <div>
        <h2>Home</h2>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home