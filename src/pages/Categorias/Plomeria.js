import React, { Component } from "react";
import {Link} from 'react-router-dom';

// Consultar en App.css para ver todos los estilos y variables declaradas

class Plomeria extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <p className="tituele">
            <a className="atitu">Plomeria</a>
          </p>
        </div>
        <div class="row">
          {/* Carta 1 con Profesion 1 */}
          <div class="col-sm-12">
            <div class="card bg-dark text-white">
              <img
                src="https://servicios.esdras.mx/Index/img/electricistas.gif"
                class="card-img"
                alt="..."
              />
              <div class="card-img-overlay">
                <h1 class="titupro" align="center">
                  Plomero
                </h1>
              </div>
              <div class="card-footer" align="center"><Link className="btn btn-danger parpadea textpar" to="/Plo1">IR</Link></div>
            </div>
          </div>
          {/* Carta 2 con Profesion 2 */}
          <div class="col-sm-12">
            <div class="card bg-dark text-white">
              <img
                src="https://www.fontaneromurcia-24h.com/wp-content/uploads/2019/03/6654/plomero-8211-tratar-con-drenajes-agrietados.png"
                class="card-img"
                alt="..."
              />
              <div class="card-img-overlay">
                <h1 class="titupro" align="center">
                Oficial Plomero
                </h1>
              </div>
              <div class="card-footer" align="center"><Link className="btn btn-danger parpadea textpar" to="/Plo2">IR</Link></div>
            <br></br><br></br>
            </div>
          </div>

          
          
        </div>
      </div>
    );
  }
}

export default Plomeria;
