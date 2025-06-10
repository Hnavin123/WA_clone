

function Header() {
    console.log("Header rendered");
  return (
    <div style={{border: "1px solid black", padding: "10px", margin:"1rem"}}>
        <div>Header</div>
        <Options></Options>
        <Options></Options>
        <Options></Options>
    </div>
    
  )
}

function Options(){
  // const {isDark} = useDarkTheme();
  const isDark = useDarkTheme();
    return <div className={`${isDark?"dark":"light"}`}>Options</div>
    
}

export default Header