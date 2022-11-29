import React from 'react';
import './InicioSession.css';

const InicioSession = () => {
  return (
    <div>
      <div className="content-dv-4x">
        <img  className="img-lg-ln" src="../assets/Logo.png" alt="logo de la pagina" />
        <h3 className="ln-txt-9">INICIO DE SECCIÓN</h3>
        <div className="ipt-lg">
            <input type="email" title="number of document"  className="ouput" name="document-identify" id="login" value="" placeholder="Email" />
            <input type="password" title="password"  className="ouput" name="password" id="password" value="" placeholder="password" />
        </div>
      </div>
    </div>
  )
}

export default InicioSession