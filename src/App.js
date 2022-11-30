//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";


//let name = "sushmit";
function App() {

  
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not 

  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
// const removeBodyClasses = ()=>{
//   document.body.classList.remove('bg-light')
//   document.body.classList.remove('bg-dark')
//   document.body.classList.remove('bg-warning')
//   document.body.classList.remove('bg-danger')
//   document.body.classList.remove('bg-success')
// }
//removeBodyClasses();
    //console.log(cls)
    //document.body.classList.add('bg-'+cls)

  const toggleMode = ()=>{
    
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      //document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing ';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install textUtils now ';
      // }, 1500);
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      //document.title = 'TextUtils - Light Mode';
      

    }
    
  }
  return (
  <>
  <Router>
   <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
    <div className="container my3">
    <Routes>
      <Route exact path='/about'
      element={<About mode={mode}/>}>
      </Route>
      <Route exact path='/'
      element={<TextForm showAlert={showAlert} heading=" Try TextUtils - word counter,character counter,Remove extra spaces" mode={mode}/>}>
      </Route>
    </Routes>
      </div>
       </Router> 
  

   
  
 
  
    {/* <About /> */}
      {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
   { /* <About/> */
    /* <Navbar></Navbar> 
   <Navbar title="TextUtils* aboutText="About TextUtils" /> */}
   {/* /users --> component 1
   users/home ---> component 2 */}
  </>
    
    
  );
}

export default App;
