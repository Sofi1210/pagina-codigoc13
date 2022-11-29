import React, { useContext, useState } from "react";
import { themeContext } from "../../App";
import "./header.css";
import Switch from "@mui/material/Switch";
import SignUp from "../SignUp";
import { Link } from "react-router-dom";

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

          <Link to='/' aria-label="items" className="items">
            Inicio
          </Link>

          <Link to='/Careers' aria-label="items" className="items">
            Carreras
          </Link>
          <Link to='/News' aria-label="items" className="items">
            Noticias
          </Link>
          <Link to='/AboutUs' aria-label="items" className="items">
            Nosotros
          </Link>
          
        </div>
      </section>
    </div>
  );
};

export default Header;
