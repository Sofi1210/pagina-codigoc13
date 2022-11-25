import React,{createContext, useState} from "react";
import './App.css';
import Header from "./Components/header/Header";
import Slideshow from "./Components/slider/Slider";
import Careers from "./Components/Careers/Careers";
import News from "./Components/news/News";
import SimpleAccordion from "./Components/we/AboutUS";
import Footer from "./Components/Footer/Footer";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Totop from "./Components/Totop";

export const themeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState("light")
  const trigger = useScrollTrigger();

  return (
    
    <themeContext.Provider value={{theme,setTheme}}>
    <div className="App" id={theme} in={!trigger}>    

      <Header/>
      <Slideshow/>
      <Careers/>
      <News/>
      <SimpleAccordion/>
      <Footer/>
      <Totop/>
    </div>
    </themeContext.Provider>
  );
}

export default App;
