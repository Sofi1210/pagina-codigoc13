import React from "react";
import './Footer.css';
import logoFooter from '../../assets/img/CódigoC13.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';



const Footer = () => {
  return (
    <div>
      <footer id="contactos">
        <div className="container_footer">
          <div className="caja_footer">
            <div>
              <img className="logo_footer" src={logoFooter} alt="" />
            </div>
          </div>

          <div className="caja_footer">
            <h2>Direccion</h2>
            <iframe title="Sonbata" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.51250464176056!2d-75.62659601452677!3d6.251787974558109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442bcd61c84c01%3A0xc5c580cf1f268a80!2sCentro%20Cultural%20Son%20Bat%C3%A1%20-%20My%20Palenque!5e1!3m2!1ses-419!2sco!4v1667491357874!5m2!1ses-419!2sco"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mapa"></iframe>

            <a href="https://www.google.com/maps/place/Centro+Cultural+Son+Bat%C3%A1+-+My+Palenque
            /@6.2518966,-75.626747,17z/data=!4m10!1m2!2m1!1scentro+cultural+mi+palenque!3m6!1s0x8e
            442bcd61c84c01:0xc5c580cf1f268a80!8m2!3d6.251783!4d-75.6266217!15sChtjZW50cm8gY3VsdHVy
            YWwgbWkgcGFsZW5xdWWSARBlZHVjYXRpb25fY2VudGVy4AEA!16s%2Fg%2F11p0dh9z9t">
              Cra. 115 # 38 BD, 8Medellín, Antioquia <i className="fa-solid fa-location-dot"></i>
            </a>
          </div>

          <div className="caja_footer">
            <h2>Redes Sociales</h2>
            <a className="redSocial" href="https://www.instagram.com/codigo_c13/" target="_black">
            <InstagramIcon size={32} />Instagram
            
            </a>
            <a className="redSocial" href="https://www.facebook.com/sonbatac13">
            <FacebookIcon size={32} /> Facebook
            </a>
            <a className="redSocial" href="https://mail.google.com/mail/u/2/?pli=1#inbox?compose=new" target="_black">
            <MailOutlineIcon size={32} /> Gmail
            </a>
          </div>
        </div>
        <div className="box_copyright">
          <hr />
          <p>Todos los derechos reservados © 2022 J-JS-I</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
