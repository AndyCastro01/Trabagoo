import React, { Component } from "react";
import {Link} from 'react-router-dom';

// Consultar en App.css para ver todos los estilos y variables declaradas

class Electronicos extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <p className="tituele">
            <a className="atitu">Electricidad</a>
          </p>
        </div>
        <div class="row">
          {/* Carta 1 con Profesion 1 */}
          <div class="col-sm-12">
            <div class="card bg-dark text-white">
              <img
                src="https://www.bing.com/th?id=ATOOCO48ADB00C2D2D32303440CD674EE22A5A76A4B3593B057BF3765210F4C0495C7B&w=472&h=280&c=13&rs=2&o=6&oif=webp&pid=SANGAM"
                class="card-img"
                alt="..."
              />
              <div class="card-img-overlay">
                <h1 class="titupro" align="center">
                  Técnico Eléctrico
                </h1>
              </div>
              <div class="card-footer" align="center"><Link className="btn btn-danger parpadea textpar" to="/Elec1">IR</Link></div>
            </div>
          </div>
          {/* Carta 2 con Profesion 2 */}
          <div class="col-sm-12">
            <div class="card bg-dark text-white">
              <img
                src="https://th.bing.com/th/id/OIP.wCH30vu3pyamgKBs0lrtvwHaEj?pid=ImgDet&rs=1"
                class="card-img"
                alt="..."
              />
              <div class="card-img-overlay">
                <h1 class="titupro" align="center">
                Oficiales Electricistas
                </h1>
              </div>
              <div class="card-footer" align="center"><Link className="btn btn-danger parpadea textpar" to="/Elec2">IR</Link></div>
            </div>
          </div>

          {/* Carta 3 con Profesion 3 */}
          <div class="col-sm-12">
            <div class="card bg-dark text-white">
              <img
                src="https://cdn.lavoz.com.ar/sites/default/files/styles/width_1072/public/nota_periodistica/electricista_foto_ilustrativa.jpg"
                class="card-img"
                alt="..."
              />
              <div class="card-img-overlay">
                <h1 class="titupro" align="center">
                Ayudante de electricista
                </h1>
              </div>
              <div class="card-footer" align="center"><Link className="btn btn-danger parpadea textpar" to="/Elec3">IR</Link></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Electronicos;
