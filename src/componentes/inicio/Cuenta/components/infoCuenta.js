import React from "react";
import {Profile} from '../../../Formularios/Profile';

import {useAuth0} from '@auth0/auth0-react'

function InfoCuenta() {
  const {isAuthenticated} = useAuth0();
  return (
    <div>
      <div className="text-center text-secondary" align="center">
        {isAuthenticated ? (
          <>
          <Profile/>
          </>
        ):(
          <div>
            <p>
              Aun no se ha indentificado porfavor loguese o resgistrese
              en la pagina
            </p>
          </div>
        )}
      
      </div>
      
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card text-bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="160"
              fill="currentColor"
              class="bi bi-activity"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
              />
            </svg>
            <div class="card-body">
              <h5 class="card-title">Trabajos Realizados con Exito</h5>
              <p class="card-text">
                Dentro de este aparatado puedes visualizar tus trabajos
                ralizados con exito asi como tu puntuacion recolectada en cada
                uno de tus trabajos.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-bg-secondary center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="160"
              fill="currentColor"
              class="bi bi-postcard"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4Zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5ZM10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM13 8h-2V6h2v2Z"
              />
            </svg>

            <div class="card-body">
              <h5 class="card-title">Tu configuración</h5>
              <p class="card-text">
                Puedes configurar tu cuenta en caso de alguna correción
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-bg-danger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="160"
              fill="currentColor"
              class="bi bi-person-workspace"
              viewBox="0 0 16 16"
            >
              <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
            </svg>
            <div class="card-body">
              <h5 class="card-title">Trabajos Pendientes por realizar</h5>
              <p class="card-text">
                Visuliza si tienes trabajos pendientes por realizar
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-bg-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="160"
              fill="currentColor"
              class="bi bi-terminal-x"
              viewBox="0 0 16 16"
            >
              <path d="M2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1H2Z" />
              <path d="M3.146 5.146a.5.5 0 0 1 .708 0L5.177 6.47a.75.75 0 0 1 0 1.06L3.854 8.854a.5.5 0 1 1-.708-.708L4.293 7 3.146 5.854a.5.5 0 0 1 0-.708ZM5.5 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5ZM16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-4.854-1.354a.5.5 0 0 0 0 .708l.647.646-.647.646a.5.5 0 0 0 .708.708l.646-.647.646.647a.5.5 0 0 0 .708-.708l-.647-.646.647-.646a.5.5 0 0 0-.708-.708l-.646.647-.646-.647a.5.5 0 0 0-.708 0Z" />
            </svg>
            <div class="card-body">
              <h5 class="card-title">Una Advertencia en tu cuenta</h5>
              <p class="card-text">
                Puedes ver si tienes alguna advertencia en tu cuenta o hay
                algunos cambios que aun no se han guardado
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-bg-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="160"
              fill="currentColor"
              class="bi bi-toggles"
              viewBox="0 0 16 16"
            >
              <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z" />
            </svg>
            <div class="card-body">
              <h5 class="card-title">Edita tu información</h5>
              <p class="card-text">
                Pudes modificar tu informacion sobre ti dentro de este apartado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCuenta;
