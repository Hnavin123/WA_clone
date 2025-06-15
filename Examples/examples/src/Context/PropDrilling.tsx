import React from 'react'

function PropDrilling() {
  const value = 10;
  return (
    <>
      <div>PropDrilling</div>
      <GrandParent gpValue={value} />
    </>
  );
}
function GrandParent(props){
  const {gpValue} = props
  return(
    <>
      <h2>Grand Parent</h2>
      <Parent pValue={gpValue}/>
    </>
  )
  
}
function Parent(props){
  const {pValue} = props
  return(
    <>
      <h2>Parent</h2>
      <Child cValue={pValue} />
    </>
  ) 
}
function Child(props){
  const {cValue} = props;
  return(
    <>
      <h2>Child</h2>
      <div>value :{cValue}</div>
    </>
  )
}


export default PropDrilling