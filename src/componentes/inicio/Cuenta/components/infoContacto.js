import React, { useState, useEffect } from "react";

import Axios from "../../../services/ConexionAxios";

function InfoContacto() {
  const [persona, setPersonas] = useState([]);

  const Consultar = async () => {
    const consulta = await Axios.get("/persona/consultar");
    setPersonas(consulta.data);
    console.log(consulta.data);
  };

  useEffect(() => {
    Consultar();
  }, []);

  return (
    <div>
      <div>
        <nav
          id="navbar-example3"
          class="navbar bg-light flex-column align-items-stretch p-3"
        >
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <nav class="nav nav-pills flex-column">
            <a class="nav-link" href="#item-1">
              Contacto #1
            </a>
            <nav class="nav nav-pills flex-column">
              <a class="nav-link ms-3 my-1" href="#item-1-1">
                Nombre
              </a>
              <a class="nav-link ms-3 my-1" href="#item-1-2">
                Telefono
              </a>
            </nav>
            <a class="nav-link" href="#item-2">
              Contacto #2
            </a>
            <a class="nav-link" href="#item-3">
              Contacto #3
            </a>
            <nav class="nav nav-pills flex-column">
              <a class="nav-link ms-3 my-1" href="#item-3-1">
                Nombre
              </a>
              <a class="nav-link ms-3 my-1" href="#item-3-2">
                Apellido
              </a>
            </nav>
          </nav>
        </nav>

        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example3"
          data-bs-smooth-scroll="true"
          tabindex="0"
        >
          <div id="item-1">
            <h4>Contacto #1</h4>
            <p>...</p>
          </div>
          <div id="item-1-1">
            <h5>{persona.nombre}</h5>
            <p>...</p>
          </div>
          <div id="item-1-2">
            <h5>Item 1-2</h5>
            <p>...</p>
          </div>
          <div id="item-2">
            <h4>Item 2</h4>
            <p>...</p>
          </div>
          <div id="item-3">
            <h4>Item 3</h4>
            <p>...</p>
          </div>
          <div id="item-3-1">
            <h5>Item 3-1</h5>
            <p>...</p>
          </div>
          <div id="item-3-2">
            <h5>Item 3-2</h5>
            <p>...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoContacto;
