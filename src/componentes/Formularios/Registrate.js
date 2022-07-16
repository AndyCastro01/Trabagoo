import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styleH.css";
import { Toaster, toast } from 'react-hot-toast';

import Axios from "../services/ConexionAxios";

function Formulario() {
  const variablesInicio = {
    clave: " ",
    contraseña:"",
    nombre: " ",
    apellidos: " ",
    ocupacion: " ",
    telefono: " ",
    sexo: "",
    email: " ",
  };

  const [values, setValues] = useState(variablesInicio);

  const CambioEstado = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  

  //Crear metodo para guardar información
  const Guardar = async () => {
    Axios.post("/persona/guardar", {
      clave: values.clave,
      contraseña: values.contraseña,
      nombre: values.nombre,
      apellidos: values.apellidos,
      ocupacion:values.ocupacion,
      telefono: values.telefono,
      sexo: values.sexo,
      email: values.email,
    }).then(() => {
      console.log("Se guardaron los registros")
      toast.success('Sus datos fueron guardados con exito!')
      
    });
   setValues(variablesInicio);
  }

  const Enviar = (e) => {
    e.preventDefault();
    Guardar();
  };

  return (
    <div className="formulario p-4">
      <div className="card col-md-4 logBack">
        <div class="llamada card-header">Formulario de personas</div>
        <div class="card-body">
          <p class="card-text">
            <form className="colocar1" onSubmit={Enviar}>
              <br />
              <label for="exampleFormControlInput1" class="form-label">
                Crear username
              </label>
              <div class="mb-3 input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                  @
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="clave"
                  value={values.clave}
                  onChange={CambioEstado}
                  placeholder="Cree un Username"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="nombre"
                  value={values.nombre}
                  onChange={CambioEstado}
                  placeholder="nombre de la persona"
                />
              </div>
              

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Apellidos
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="apellidos"
                  value={values.apellidos}
                  onChange={CambioEstado}
                  placeholder="Ingresa los apellidos"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Ocupacion/Empleo
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="ocupacion"
                  value={values.ocupacion}
                  onChange={CambioEstado}
                  placeholder="Empleo de la persona"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Teléfono
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="telefono"
                  value={values.telefono}
                  onChange={CambioEstado}
                  placeholder="Ingresa el numero telefonico"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={values.email}
                  onChange={CambioEstado}
                  placeholder=""
                />
              </div>


              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="contraseña"
                  value={values.contraseña}
                  onChange={CambioEstado}
                  placeholder="Cree una contraseña"
                />
              </div>

              <button type="submit" className="colocar btn btn-primary" >
                Enviar
              </button>
            </form>            
          </p>
          <Link to="./Iniciar Sesion">Ya tengo un usuario</Link>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
