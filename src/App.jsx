import { useState } from 'react'
import viteLogo from '/vite.svg';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import PageNotFounde from './Components/PageNotFounde';
import Chat from './Components/Chat';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* It will match to the route that has chat/xxxx */}
        <Route path='/chat/:uniqueId' element={<Chat />} />
        <Route path='*' element={<PageNotFounde />} />
      </Routes>
    </>
  )
}

export default App
