import React, { Component } from "react";
import {Link} from 'react-router-dom';

// Consultar en App.css para ver todos los estilos y variables declaradas

class Mecanico extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <p className="tituele">
            <a className="atitu">Mecanicos</a>
          </p>
        </div>
        <div class="row">
          {/* Carta 1 con Profesion 1 */}
          <div class="col-sm-12">
            <div class="card bg-dark text-white">
              <img
                src="https://dlmecanico.com/wp-content/uploads/2021/11/Carro-Taller1.png"
                class="card-img"
                alt="..."
              />
              <div class="card-img-overlay">
                <h1 class="titupro" align="center">
                Mecanico Diesel
                </h1>
              </div>
              <div class="card-footer" align="center"><Link className="btn btn-danger parpadea textpar" to="/Me1">IR</Link></div>
            </div>
          </div>
          {/* Carta 2 con Profesion 2 */}
          <div class="col-sm-12">
            <div class="card bg-dark text-white">
              <img
                src="https://lubery.mx/wp-content/uploads/2021/09/taller-mecanico-domicilio-tijuana-04.png"
                class="card-img"
                alt="..."
              />
              <div class="card-img-overlay">
                <h1 class="titupro" align="center">
                Tecnico Mecanico 
                </h1>
              </div>
              <div class="card-footer" align="center"><Link className="btn btn-danger parpadea textpar" to="/Me2">IR</Link></div>
            <br></br><br></br>
            </div>
          </div>

          
          
        </div>
      </div>
    );
  }
}

export default Mecanico;
