import React, { useState, useEffect } from "react";

import Axios from "../../../componentes/services/ConexionAxios";
import { Toaster, toast } from "react-hot-toast";

// El redimencionamiento de imagenes se encuentra en el css de App.css

function Me2() {
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
      toast.promise(Consultar(), {
        loading: "Eliminando Usuario...",
        success: <b>Eliminado!</b>,
      });
    }

    Consultar();
  };

  useEffect(() => {
    Consultar();
  }, []);

  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://lubery.mx/wp-content/uploads/2021/09/taller-mecanico-domicilio-tijuana-04.png"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-50" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br/>
      <div class="shadow p-3 mb-5 bg-dark rounded" align="center">
        <p className="">
          <br></br>
          <h3 className="descripo">Descripción completa del empleo</h3>
          <br></br>

          <h5 className="textdescri" aling="left">
          ¡Intégrate a trabajar con nosotros!<br></br>
            <br></br>
            · Mantenimiento a equipos de hidroneumáticos.<br></br>
            · Manejo de tuberías hidráulicas y aguas negras.<br></br>
            · Bonos de asistencia.<br></br>
            · Sistemas contra incendios.<br></br>
            · Desarrollo de actividades del área.<br></br>
            · Llenado de bitácoras y ordenes de trabajo.<br></br>
            · Desazolve de tuberías.<br></br>
            · Manejo de fluxómetros<br></br>
            · Apoyo técnico de mantenimiento de baños.
            <br></br>
            <br></br>
            -Tipo de puesto: Tiempo completo<br></br>
            -Salario: $1,500.00 - $2,600.00 a la semana<br></br>
            <br></br>
            <br></br>
          </h5>
        </p>
      </div>

      <br />
      <h3 className="tituob" align="center">
        Tecnico Mecanico<br></br>
        <br></br>
      </h3>

      <div>
        <div class="container">
          {persona.map((persona, index) => {
            return (
              <div class="col-lg-4 m-1">
                <center>
                  <div class="">
                    <img
                      src="https://us.123rf.com/450wm/yaryhee/yaryhee1706/yaryhee170600146/81034980-electricista-trabajando-electric-potencia-poste-azul-cielo.jpg?ver=6"
                      class="img-fluid rounded-4"
                      alt="..."
                    />
                  </div>
                </center>
                <div class="card">
                  <div class="color-carta card-body">
                    <h5 class="card-title">{persona.nombre}</h5>
                    <h5 class="card-title">{persona.ocupacion}</h5>
                    <p class="card-text">{persona.email}</p>
                    <a href="#" class="btn btn-primary">
                      {persona.telefono}
                    </a>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => Eliminar(persona._id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <hr />
        </div>
      </div>
    </div>
  );
}

export default Me2;
