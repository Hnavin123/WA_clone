import React, { useState } from 'react'
import './App.css'
import Heading from './Components/HeadingProps';
import HeadingParent from './Components/HeadingParent';
import ShoppingCart from './Components/ShoppingCart';
import Counter from './Components/Counter';
import PropDrilling from './Context/PropDrilling';
import PropDrillingSol from './Context/PropDrillingSol';
import { Routes, Route } from 'react-router-dom';
import Home from './Context/ThemeChanger/Home';
import PageNotFound from './Context/ThemeChanger/PageNotFound';

// import  { useDarkTheme } from './Context/ThemeChanger/ThemeContext';

// function InputBox(){
//   const[content,setContent] = useState("");

//   const handleChange = (e) =>{
//     const updatedValue = e.target.value;
//     setContent(updatedValue);
//   }
//   return <div>
//     <input type="text" value={content} onChange={handleChange} />
//   </div>
// }


// function CounterParent() {
//   return <div>
//     <Counter initialvalue={1}></Counter>
//     <Counter initialvalue={2}></Counter>
//     <Counter initialvalue={3}></Counter>
//   </div>
// }

export const ThemeWrapper = React.createContext();

  function App() {
    const[isDark, updateTheme] = useState(false);
    const handleToggleTheme = () => {
      updateTheme(!isDark);
    }
    

    return (
      <>
        <h1>App Component</h1>
        {/* <HeadingParent name={"Navin"} age={22}> </HeadingParent>
        <ShoppingCart></ShoppingCart>
        <Counter></Counter>
        <CounterParent></CounterParent> */}
        {/* <InputBox></InputBox> */}
        {/* <PropDrilling></PropDrilling> */}
        

        <button onClick={handleToggleTheme}>Toggle Theme</button>
        <ThemeWrapper.Provider value={isDark}>
           <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='*' element={<PageNotFound/>}></Route>
          </Routes>

        </ThemeWrapper.Provider>
         
        
      </>
    )
  }

export default App
