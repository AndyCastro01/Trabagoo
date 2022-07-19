import React, { useState, useEffect } from "react";

import Axios from "../../../componentes/services/ConexionAxios";
import { Toaster, toast } from "react-hot-toast";

// El redimencionamiento de imagenes se encuentra en el css de App.css

function Tec1() {
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
              src="https://hosnic.com/wp-content/uploads/2022/05/hire-developer-1.png"
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
            </h5></p>
      </div>

      <br />
      <h3 className="tituob" align="center">
      Tecnico instalador de alarmas ,pelicula de seguridad<br></br>
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
                      src="http://www.wilsoft-la.com/wp-content/uploads/2021/12/Programador-enfadado.png"
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

export default Tec1;