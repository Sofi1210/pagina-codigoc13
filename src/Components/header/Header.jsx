import React, { useContext, useState } from "react";
import { themeContext } from "../../App";
import "./header.css";
import Switch from "@mui/material/Switch";
import News from "../news/News";
import We from "../we/AboutUS"
import Careers from "../Careers/Careers";
import SignUp from "../SignUp";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Header = () => {
  const { theme, setTheme } = useContext(themeContext);
  const [logo, setLogo] = useState("logo-light");

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setLogo(theme === "dark" ? "logo-light" : "logo-dark");
  };
  
  return (
    <div>
      <section className="header">

        <div className="menuTop">

          <SignUp/>

          <div id={logo} className="logo">

          </div>

          <Switch className="switchDark" onChange={changeTheme} {...label} />

        </div>

        <div className="menuBottom">

          <a href={Careers} aria-label="items" className="items">
            Carreras
          </a>
          <a href={News} aria-label="items" className="items">
            Noticias
          </a>
          <a href={We} aria-label="items" className="items">
            Nosotros
          </a>
          
        </div>
      </section>
    </div>
  );
};

export default Header;
