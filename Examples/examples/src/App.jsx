import { useState } from 'react'
import './App.css'
import Heading from './Components/HeadingProps';
import HeadingParent from './Components/HeadingParent';
import ShoppingCart from './Components/ShoppingCart';
import Counter from './Components/Counter';

function InputBox(){
  const[content,setContent] = useState("");

  const handleChange = (e) =>{
    const updatedValue = e.target.value;
    setContent(updatedValue);
  }
  return <div>
    <input type="text" value={content} onChange={handleChange} />
  </div>
}


function CounterParent() {
  return <div>
    <Counter initialvalue={1}></Counter>
    <Counter initialvalue={2}></Counter>
    <Counter initialvalue={3}></Counter>
  </div>
}

  function App() {
    const [count, setCount] = useState(0)

    return (
      <>
        <h1>App Component</h1>
        {/* <HeadingParent name={"Navin"} age={22}> </HeadingParent>
        <ShoppingCart></ShoppingCart>
        <Counter></Counter>
        <CounterParent></CounterParent> */}
        <InputBox></InputBox>
      </>
    )
  }

export default App
