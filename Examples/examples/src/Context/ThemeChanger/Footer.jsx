import React from 'react'
import { ThemeWrapper } from '../../App';
import { useContext } from 'react';
function Footer() {
    console.log("Footer rendered");
  return (
    <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
        <div>Footer</div>
        <Options></Options>
        <Options></Options>
        <Options></Options>
    </div>
    
  )
}

function Options(){
    const isDark = useContext(ThemeWrapper);
        return <div className={`${isDark?"dark":"light"}`}>Options</div>
}

export default Footer
