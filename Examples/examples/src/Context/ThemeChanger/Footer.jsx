import React from 'react'

function Footer() {
    console.log("Footer rendered");
  return (
    <div>
        <div>Footer</div>
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

export default Footer
