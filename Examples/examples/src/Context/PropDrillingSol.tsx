import React,{useContext} from 'react'

const contestWrapper = React.createContext();

function PropDrillingSol() {
  const value = 10;
  return (
    <>
      <div>PropDrillingSol</div>
      <contestWrapper.Provider value={value}>
        <GrandParent />
      </contestWrapper.Provider>
    </>
  );
}
function GrandParent(){
  
  return(
    <>
      <h2>Grand Parent</h2>
      <Parent />
    </>
  )
  
}
function Parent(){
  return(
    <>
      <h2>Parent</h2>
      <Child  />
    </>
  ) 
}
function Child(){
    const message = useContext(contestWrapper)
  return(
    <>
      <h2>Child</h2>
      <div> value : {message}</div>
    </>
  )
}


export default PropDrillingSol
