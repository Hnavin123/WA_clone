
function Heading(props){
  const age = props.age;
  const name = props.name;
  const children = props.children;
  return <>
    <h2>Hi I am {name} and I am {age} years old.</h2>
    {children}
  </>

}
export default Heading;