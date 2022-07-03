import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListaCard from './Productos_Presentacion/producto_Card';

import './home.css';
import Example from './slid'


function home() {

    return (
        <div>
            <br></br>
            <div>
                       <p className="tituele"><a className="atitu">
                      Bienvenido  a  TrabaGo
                    </a></p>
                    </div><br></br>
                    
           
            <br></br>
            <br></br>
            <br></br>
            <div className="container-fluid ml-2">
                <Example />
            </div>
            <br></br>
            
            <br></br>
            <br></br>
            <br></br>
            <div className="container-fluid" >
                <div className="card border-dark mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="img/ciclo-compra.png" alt="..." className="imge-c" width="450px" height="236px" />
                        </div>
                        <div className="col-md-8 txt-card">
                            <div className="card-body">
                                <h5 className="card-title txt-card"><b>TrabaGo Te ayuda a buscar empleo </b></h5>
                                <p className="card-text txt-card">
                                    
                                ✔ Registro gratuito. Encuentra tu próximo trabajo hoy.<br></br><br></br>
                                ✔ Ofertas cada día. Empleos que se ajustan a tu perfil.<br></br><br></br>
                                ✔ Facil y rapido.<br></br><br></br>
                                ✔ Completa tu perfil. Muéstrate profesional y ganarás visibilidad.</p>
                                <p className="card-text txt-card"><small class="text-muted">Actualizado hace 3 horas por Andy</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
               

                <br></br>
                        
                   
                
            </div>

        

        
<section id="gallery">
  <div class="container">
    <div class="row">
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img src="https://www.bing.com/th?id=ATOOCO48ADB00C2D2D32303440CD674EE22A5A76A4B3593B057BF3765210F4C0495C7B&w=472&h=280&c=13&rs=2&o=6&oif=webp&pid=SANGAM" alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Técnico Eléctrico</h5>
        <p class="card-text">Empresa 100% Mexicana, dando oportunidad a personas con el mejor talento, queremos invitarle a participar en el proceso de Reclutamiento como candidato para esta posición.</p>
       <a href="" class="btn btn-outline-success btn-sm">   Ir   </a>
      </div>
     </div>
    </div>
  <div class="col-lg-4 mb-4">
  <div class="card">
      <img src="https://homesolution.net/blog/wp-content/uploads/2019/02/plomero_a_domicilio_teusaquillo_bogota_colombia.jpg" alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Plomero/a</h5>
        <p class="card-text">Buscamos plomero-electricista con experiencia para trabajos en obra y mantenimientos para trabajo fijo.</p>
       <a href="" class="btn btn-outline-success btn-sm">Ir</a>
      </div>
      </div>
    </div>
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img src="https://assets.iprofesional.com/cdn-cgi/image/w=880,f=webp/https://assets.iprofesional.com/assets/jpg/2022/01/530304.jpg" alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Programador de Mantenimiento</h5>
        <p class="card-text">Empresa 100% Mexicana, dando oportunidad a personas con el mejor talento, queremos invitarle a participar en el proceso de Reclutamiento como candidato para esta posición.</p>
       <a href="" class="btn btn-outline-success btn-sm">Ir</a>
      </div>
     </div>
    </div>
  </div>
</div>
</section>
<br></br> <br></br> <br></br> <br></br> <br></br>



   
<section id="gallery">
  <div class="container">
    <div class="row">
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img src="https://krolls.com.mx/wp-content/uploads/2022/02/Tecnicos-instaladores.pg_.jpg" alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Instalador Sistemas de Seguridad</h5>
        <p class="card-text">Realizar diferentes instalaciones de Sistemas de Seguridad (Alarmas, Intrusión, CCTV, control de acceso, Detección de Incendio), como es tubería, cableado, equipo y configuración.</p>
       <a href="" class="btn btn-outline-success btn-sm">   Ir   </a>
      </div>
     </div>
    </div>
  <div class="col-lg-4 mb-4">
  <div class="card">
      <img src="https://img.freepik.com/foto-gratis/mecanico-automoviles-trabajando-garaje-servicio-reparacion_146671-19690.jpg" alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Mecánico/a</h5>
        <p class="card-text">Garantizar la atención de las unidades de la compañía, llevando a cabo los servicios eléctricos reportados y detectados, a su vez cumpliendo con los mantenimientos preventivos de acuerdo al programa eléctrico prediseñado</p>
       <a href="" class="btn btn-outline-success btn-sm">Ir</a>
      </div>
      </div>
    </div>
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img src="data:image/jpeg;base64,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" alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Instalador, trabajos en campo</h5>
        <p class="card-text">Instalación en Campo de Sistemas de Seguridad Electronica y Sistemas de Voz y Datos. Cableados, conexión y atención al cliente final. Conocimiento Necesarios en las areas: Videovigilancia CCTV IP, Control de Acceso, Alarma, Cerco Electrico, Informático</p>
       <a href="" class="btn btn-outline-success btn-sm">Ir</a>
      </div>
     </div>
    </div>
  </div>
</div>
</section>


<br></br> <br></br> <br></br> <br></br> <br></br>




            <div class="card text-center">
                <div class="card-header">
                    TravaGo, el trabajo siempre cerca de ti
                    <a> </a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
                        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                        <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
                    </svg>
                </div>
                <div class="card-body">
                    <h5 class="card-title txt-card">Todo lo que tu necesitas </h5>
                    <p class="card-text txt-card">
                        Y tu solo sabes donde, solo en TrabaGo.
                        <a> </a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z" />
                    </svg></p>
                    <a href="#" class="btn btn-primary txt-card">Vamos, Ya!</a>
                </div>
                <div class="card-footer text-muted txt-card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                    <a> </a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <a> </a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                    <br></br>
                    <a>
                        ©2022 Todos los derechos reservados
                    </a>
                </div>
            </div>
        </div>




    );
}


export default home;




