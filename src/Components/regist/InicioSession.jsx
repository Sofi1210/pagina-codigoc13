import React from 'react';
import './InicioSession.css';

const InicioSession = () => {
  return (
    <div>
      <div class="content-dv-4x">
        <img  class="img-lg-ln" src="../assets/Logo.png" alt="logo de la pagina" />
        <h3 class="ln-txt-9">INICIO DE SECCIÓN</h3>
        <div class="ipt-lg">
            <input type="email" title="number of document"  class="ouput" name="document-identify" id="login" value="" placeholder="Email" />
            <input type="password" title="password"  class="ouput" name="password" id="password" value="" placeholder="password" />
        </div>
      </div>
    </div>
  )
}

export default InicioSession