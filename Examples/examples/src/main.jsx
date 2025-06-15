
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import Myfile from './Myfile';
import { NonDefault, varName } from './Myfile';
import { BrowserRouter } from 'react-router-dom';
//import ThemeWrapper from './Context/ThemeChanger/ThemeContext.jsx';
createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
   <App/>
    {/* <ThemeWrapper>
     
    </ThemeWrapper> */}
    
  </BrowserRouter>
  
  </>
)
