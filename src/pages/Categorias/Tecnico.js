import React, { Component } from "react";
import {Link} from 'react-router-dom';

// Consultar en App.css para ver todos los estilos y variables declaradas

class Tecnico extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <p className="tituele">
            <a className="atitu">Tecnico instalador de alarmas ,pelicula de seguridad</a>
          </p>
        </div>
        <div class="row">
          {/* Carta 1 con Profesion 1 */}
          <div class="col-sm-12">
            <div class="card bg-dark text-white">
              <img
                src="https://www.computecs.com.gt/images/Soporte/Miguel-Angel-Alonso-blog-virtualizacion-horizon-view2.png"
                class="card-img"
                alt="..."
              />
              <div class="card-img-overlay">
                <h1 class="titupro" align="center">
                Desarrollador web
                </h1>
              </div>
              <div class="card-footer" align="center"><Link className="btn btn-danger parpadea textpar" to="/Tec1">IR</Link></div>
            </div>
          </div>
          {/* Carta 2 con Profesion 2 */}
          <div class="col-sm-12">
            <div class="card bg-dark text-white">
              <img
                src="http://jatinformatik.com/images/soporte-tecnico.png"
                class="card-img"
                alt="..."
              />
              <div class="card-img-overlay">
                <h1 class="titupro" align="center">
                Tecnico instalador
                </h1>
              </div>
              <div class="card-footer" align="center"><Link className="btn btn-danger parpadea textpar" to="/Tec2">IR</Link></div>
            <br></br><br></br>
            </div>
          </div>

          
          
        </div>
      </div>
    );
  }
}

export default Tecnico;
