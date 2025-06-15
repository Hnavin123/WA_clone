// import React from "react";
// import { useState } from "react";
// import { useContext } from "react";

// const ThemeContext = React.createContext();

// export function useDarkTheme(){
//     useContext(ThemeContext)
// }
// function ThemeWrapper({children}){
//     const [isDark, updateTheme] = useState(false);
//     const handleToggleTheme = () => {
//       updateTheme(!isDark)
//     }

//     return <ThemeContext.Provider value={{isDark,handleToggleTheme}}>
//         {children}
//     </ThemeContext.Provider>
// }
// export default ThemeWrapper;