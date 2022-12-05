import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/header/Header";
import Careers from "./Components/Careers/Careers";
import News from "./Components/news/News";
import SimpleAccordion from "./Components/we/AboutUS";
import Footer from "./Components/Footer/Footer";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Totop from "./Components/Totop";
import Home from "./Components/Home/Home";

export const themeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("light");
  const trigger = useScrollTrigger();

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <div className="App" id={theme} in={!trigger}> 
      <Header />
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/Careers" element={<Careers />} />
        <Route path="/News" element={<News />} />
        <Route path="/AboutUs" element={<SimpleAccordion />} />

      </Routes>

      <Footer />
      <Totop />
      </div>
    </themeContext.Provider>
  );
}

export default App;
