import React from 'react';
import GetAvatar from './GetAvatar';
import Profile from './Profile';
import '../stylesheets/EstiloIndep.css';
import mich from '../images/mish2.png';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { avatar: '' };
    this.updateAvatar = this.updateAvatar.bind(this);
  }

  updateAvatar(avatar) {
    this.setState({ avatar: avatar });
  }

  render() {
    return (
      <div>
        <GetAvatar avatar={this.state.avatar} updateAvatar={this.updateAvatar} />
        <Profile avatar={this.state.avatar} />
        <div className="verticalLine"></div>

        <div className="list-group barIz">
          <a href="#" className="list-group-item list-group-item-action"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg> Perfil</a>
          <a href="#" className="list-group-item list-group-item-action"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-badge" viewBox="0 0 16 16">
            <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
          </svg> Contactos</a>
          <a href="#" className="list-group-item list-group-item-action"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-handbag" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
          </svg> Compras</a>
        </div>

        <div className="Letras">
          <h1>Hola Bienvenido<span class="badge bg-secondary">Usuario/a</span></h1>
        </div>
        <div>
          <h3>
            <p className="text">Este es tu espacio  aqui podras consultar tu información,</p>
            <p className="text">siente seguro de verificar, consultar y modificar tu información</p>
          </h3>
        </div>

        <div className="mish">
          <img src='img/mish3.png' className="Cat"/>
          <img src='img/pc.png' className="pc"/>
          <img src='img/targeta.png' className="targeta"/>
          <img src='img/escudo.png' className="escudo"/>
        </div>

        <div className="TablitaPed">
        <h1 class="display-6">Aqui puedes ver una previsualización de tus compras</h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">N° Pedido</th>
                <th scope="col">Producto</th>
                <th scope="col">Fecha de entrega</th>
                <th scope="col">Dirección de entrega</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>!Phone 12 pro max</td>
                <td>$27,499</td>
                <td>4av las Carmelitas; Campeche</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Pantalla Hyundai 32 pulgadas HD Smart TV</td>
                <td>$4,499.00</td>
                <td>4av las Carmelitas; Campeche</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Laptop Gaming Asus Tuf FX505DT</td>
                <td>$21,999.00</td>
                <td>4av las Carmelitas; Campeche</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
