import React,{createContext, useState} from "react";
import './App.css';
import Header from "./Components/header/Header";
import Slideshow from "./Components/slider/Slider";
import Careers from "./Components/Careers/Careers";
import News from "./Components/news/News";
import SimpleAccordion from "./Components/we/AboutUS";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/form/Form";

export const themeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState("light")

  return (
    
    <themeContext.Provider value={{theme,setTheme}}>
    <div className="App" id={theme}>    

      <Header/>
      <Slideshow/>
      <Careers/>
      <News/>
      <SimpleAccordion/>
      <Form/>
      <Footer/>
    </div>
    </themeContext.Provider>
  );
}

export default App;
