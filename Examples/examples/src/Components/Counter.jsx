import { useState } from "react";

function Counter(props){
    const[value,setValue] = useState(props.initialvalue);

    const handleIncrement = () => {
        if(value==10) {
            return;
        }
        setValue(value++)
    }
    const handleDecrement = () =>{
        if(value==0){
            return;
        }
        setValue(value--);
    }
    return <div>
        <div>{value}</div>
        <button onClick={handleIncrement}>+ Plus</button>
        <button onClick={handleDecrement}>- Minus</button>
    </div>
}
export default Counter;