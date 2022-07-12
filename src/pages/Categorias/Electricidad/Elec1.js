import React, { useState, useEffect } from "react";

import Axios from "../../../componentes/services/ConexionAxios";

function Elec1() {
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
      <div align="center">
        <img
          src="https://www.bing.com/th?id=ATOOCO48ADB00C2D2D32303440CD674EE22A5A76A4B3593B057BF3765210F4C0495C7B&w=472&h=280&c=13&rs=2&o=6&oif=webp&pid=SANGAM"
          width="600"
          height="350"
        ></img>
        <br></br>
        <br></br>
        <h3 className="tituob" align="center">
          Técnico Eléctrico<br></br>
          <br></br>
        </h3>
        <br></br>

        <p className="borpro">
          <br></br>
          <h3 className="descripo">Descripción completa del empleo</h3>
          <br></br>

          <h5 className="textdescri" aling="left">
            -Solicitamos oficiales y ayudantes eléctricos para obra.<br></br>
            <br></br>
            -Tenemos diferentes obras en la ciudad.<br></br>
            -Sueldos base con todas las prestaciones de ley.<br></br>
            -Bonos de asistencia.<br></br>
            -Horarios fijos de lunes a viernes de 8:00 am a 6:00 pm y sábados de
            8:00 am a 1:00 pm.<br></br>
            -Cotización al 100% con el seguro.<br></br>
            -Crecimiento y estabilidad laboral.<br></br>
            -Si te interesa contáctanos via WhatsApp 2216647909 con Rolando
            Lozano o postulate por este medio.<br></br>
            -Zonas: Tlalpan, Patriotismo, Polanco, Chapultepec, etc.<br></br>
            <br></br>
            <br></br>
            -Tipo de puesto: Tiempo completo<br></br>
            -Salario: $1,500.00 - $2,600.00 a la semana<br></br>
            <br></br>
            <br></br>
          </h5>
        </p>
      </div>

      <div>
        <div class="row">
          {persona.map((persona, index) => {
            return (
              <div class="col-lg-4 mb-4">
                <center>
                <div class="col-md-4 ">
                  <img src="https://us.123rf.com/450wm/yaryhee/yaryhee1706/yaryhee170600146/81034980-electricista-trabajando-electric-potencia-poste-azul-cielo.jpg?ver=6" class="img-fluid rounded-start" alt="..." />
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

export default Elec1;
