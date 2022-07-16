import React, { Component } from "react";

class Electronicos extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div align="center">
          <div>
            <p className="tituele">
              <a className="atitu">Electricidad</a>
            </p>
          </div>
          <br></br>

          <a href="/Elec1">
            <p className="borimg">
              <img
                src="https://www.bing.com/th?id=ATOOCO48ADB00C2D2D32303440CD674EE22A5A76A4B3593B057BF3765210F4C0495C7B&w=472&h=280&c=13&rs=2&o=6&oif=webp&pid=SANGAM"
                width="600"
                height="350"
              ></img>
              <br></br>
              <h3 className="titupro" align="center">
                Técnico Eléctrico<br></br>
                <b className="parpadea textpar">IR</b>
              </h3>
            </p>
          </a>
          <br></br>

          <a href="/Elec2">
            <p className="borimg">
              <img
                src="https://th.bing.com/th/id/OIP.wCH30vu3pyamgKBs0lrtvwHaEj?pid=ImgDet&rs=1"
                width="580"
                height="350"
              ></img>
              <h3 className="titupro" align="center">
                Oficiales Electricistas<br></br>
                <b className="parpadea textpar">IR</b>
              </h3>
            </p>
          </a>
          <br></br>

          <a href="/Elec3">
            <p className="borimg">
              <img
                src="https://cdn.lavoz.com.ar/sites/default/files/styles/width_1072/public/nota_periodistica/electricista_foto_ilustrativa.jpg"
                width="580"
                height="315"
              ></img>
              <br></br>
              <br></br>
              <h3 className="titupro" align="center">
                Ayudante de electricista<br></br>
                <b className="parpadea textpar">IR</b>
              </h3>
            </p>
          </a>
          <br></br>
        </div>
      </div>
    );
  }
}

export default Electronicos;
