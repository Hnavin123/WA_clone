import React,{useContext} from 'react'

const ContextWrapper = React.createContext();
function PropDrilling() {
  const value=10;
  return (
    <>
      <div>PropDrilling Solution</div>
      <ContextWrapper.Provider value={value}>
        <GrandParent></GrandParent>
      </ContextWrapper.Provider>
    </>
    
  )
}
function GrandParent(){
  return (
    <>
      <h1>Grand Parent</h1>
      <Parent></Parent>
    </>
  )
}
function Parent(){
  return (
    <>
      <h2>Parent</h2>
      <Child></Child>
    </>
  )
}
function Child(){
  const message = useContext(ContextWrapper);
  return (
    <>
      <h2>Child </h2>
      <div>value:{message}</div>
    </>
  )
}

export default PropDrilling


//Prop Drilling Example
// import React from 'react'

// function PropDrilling() {
//   const value =10;
//   return (
//     <><
//       div>PropDrilling</div>
//       <GrandParent value={value}></GrandParent>
//     </>
//   )
// }

// function GrandParent (props){
//   const value = props.value;
//   return (
//     <>
//     <h2>Grant Parent</h2>
//     <Parent value={value}></Parent>
//     </>
//   )
// }

// function Parent (props){
//   const value = props.value;
//   return (
//     <>
//     <h2>Parent</h2>
//     <Child value={value}></Child>
//     </>
//   )
// }

// function Child (props){
//   const value = props.value;
//   return (
//     <>
//     <h2> Children</h2>
//     <div>value={value}</div>
//     </>
//   )
// }

// export default PropDrilling