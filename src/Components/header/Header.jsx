import React, { useContext, useState } from "react";
import { themeContext } from "../../App";
import "./header.css";
import SignIn from '../regist/InicioSession'
import { blue } from '@mui/material/colors';
import Avatar from "@mui/material/Avatar";
import Switch from "@mui/material/Switch";
import PersonIcon from '@mui/icons-material/Person';
import Swal from "sweetalert2";
import News from "../news/News";
import We from "../we/AboutUS"
import Careers from "../Careers/Careers";



const label = { inputProps: { "aria-label": "Switch demo" } };

const Header = () => {
  const { theme, setTheme } = useContext(themeContext);
  const [logo, setLogo] = useState("logo-light");

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setLogo(theme === "dark" ? "logo-light" : "logo-dark");
  };

  const showAlert = () =>{

    const { value: email } = Swal.fire({
      html:
      ` ${SignIn}`
    });
    
    if (email) {

      Swal.fire(`Entered email: ${email}`)
    }
  }


  return (
    <div>
      <section className="header">

        <div className="menuTop">

          <Avatar className="session" sx={{ bgcolor: blue[500] }} onClick={showAlert}>
            <PersonIcon/>
          </Avatar>
          

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
