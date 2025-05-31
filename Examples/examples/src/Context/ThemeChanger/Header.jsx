import React from 'react'

function Header() {
    console.log("Header rendered");
  return (
    <div>
        <div>Header</div>
        <Options></Options>
        <Options></Options>
        <Options></Options>
    </div>
    
  )
}

function Options(){
    return(
        <div>Options</div>
    )
}

export default Header