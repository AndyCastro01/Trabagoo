import React, { Component } from "react";
import {Link} from 'react-router-dom';

// Consultar en App.css para ver todos los estilos y variables declaradas

class Programador extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <p className="tituele">
            <a className="atitu">Programador</a>
          </p>
        </div>
        <div class="row">
          {/* Carta 1 con Profesion 1 */}
          <div class="col-sm-12">
            <div class="card bg-dark text-white">
              <img
                src="http://www.wilsoft-la.com/wp-content/uploads/2021/12/Programador-enfadado.png"
                class="card-img"
                alt="..."
              />
              <div class="card-img-overlay">
                <h1 class="titupro" align="center">
                Desarrollador web
                </h1>
              </div>
              <div class="card-footer" align="center"><Link className="btn btn-danger parpadea textpar" to="/Pro1">IR</Link></div>
            </div>
          </div>
          {/* Carta 2 con Profesion 2 */}
          <div class="col-sm-12">
            <div class="card bg-dark text-white">
              <img
                src="https://hosnic.com/wp-content/uploads/2022/05/hire-developer-1.png"
                class="card-img"
                alt="..."
              />
              <div class="card-img-overlay">
                <h1 class="titupro" align="center">
                Programador y/o Desarrollador
                </h1>
              </div>
              <div class="card-footer" align="center"><Link className="btn btn-danger parpadea textpar" to="/Pro2">IR</Link></div>
            <br></br><br></br>
            </div>
          </div>

          
          
        </div>
      </div>
    );
  }
}

export default Programador;
