import React, { useState, useEffect } from "react";
import "../stylesheets/EstiloIndep.css";
import Axios from "../../../../componentes/services/ConexionAxios";
import { Link } from "react-router-dom";

function MiCuenta() {
  const [persona, setPersonas] = useState([]);

  const Consultar = async () => {
    const consulta = await Axios.get("/persona/consultar");
    setPersonas(consulta.data);
    console.log(consulta.data);
  };

  const Eliminar = async (id) => {
    if (window.confirm("¿Esta usted seguro de eliminar el dato?")) {
      await Axios.delete(`/persona/eliminar/${id}`);
      console.log("Datos eliminados correctamente");
    }

    Consultar();
  };

  useEffect(() => {
    Consultar();
  }, []);

  return (
    <div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div className="text">
                <h1>
                  Hola Bienvenido
                  <span class="badge bg-secondary">Usuario/a</span>
                </h1>
              </div>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div>
                <h3>
                  <p className="text">
                    Este es tu espacio aqui podras consultar tu información,
                  </p>
                  <p className="text">
                    Siente seguro de verificar, consultar y modificar tu
                    información
                  </p>
                </h3>
              </div>
              <div classname="Offcanvas">
        <a
          class="btn btn-primary bt-offcanvas btn-lg"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-bar-chart-steps"
            viewBox="0 0 16 16"
          >
            <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0zM2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1z" />
          </svg>
          Configuracion
        </a>

        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header ">
            <h5 class="offcanvas-title sizeletra" id="offcanvasExampleLabel">
              Configuración
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div>
              Solo tu puedes visualizar tus datos guardados así como los
              trabajos que recientemente has realizado o de lo contrario los
              trabajos que solicitaste
            </div>
            <div class="dropdown mt-3">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
              >
                Ver opciones disponibles
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <Link
                    to="/Cuenta"
                    className="list-group-item list-group-item-action"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>{" "}
                    Perfil
                  </Link>
                </li>
                <Link to="/Contactos" className="list-group-item list-group-item-action">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-badge"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
                  </svg>{" "}
                  Contactos
                </Link>
                <a href="#" className="list-group-item list-group-item-action">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-handbag"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
                  </svg>
                  Trabajos
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>

     

      <div className="TablitaTrabaj ">
        <h1 class="text2">
          Aqui puedes ver una previsualización de tus Trabajadores contratados
        </h1>
        {persona.map((persona, index) => {
          return (
            <div>
              <div class="card sm-4 m-3">
                <tr>
                  <div class="card-header">{persona.ocupacion}</div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{persona.nombre}</li>
                    <li class="list-group-item">+52 {persona.telefono}</li>
                    <li class="list-group-item">{persona.email}</li>
                  </ul>
                </tr>
                <tr>
                  <th>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => Eliminar(persona._id)}
                    >
                      Eliminar
                    </button>
                  </th>
                </tr>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MiCuenta;