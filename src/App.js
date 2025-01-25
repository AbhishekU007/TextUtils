
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light'); //weather darkmode is enabled or not
  const [alert, setAlert] = useState(null);
///////////////////////////////////////
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <TextForm showAlert={showAlert} heading="Enter text to be analysed" mode={mode}/>;
      case "about":
        return <About/>;
      default:
        return <TextForm showAlert={showAlert} heading="Enter text to be analysed" mode={mode}/>;
    }
  };
///////////////////////////////
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212121';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <TextForm showAlert={showAlert} heading="Enter text to be analysed" mode={mode}/>
  //   },
  //   {
  //     path: "/about",
  //     element: <About/>
  //   },
  // ])

  return (
    <>
    
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} setCurrentPage={setCurrentPage}/>
    <Alert alert={alert}/>

    {renderPage()}

    {/* <div className="container">
      <TextForm showAlert={showAlert} heading="Enter text to be analysed" mode={mode}/>
    </div> */}
      
    </>
  );
}

export default App;
