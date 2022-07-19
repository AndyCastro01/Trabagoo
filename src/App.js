import logo from './logo.svg'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './componentes/Formularios/styleH.css';
import './componentes/inicio/StyleH.css';
import './pages/Productos_Presentacion/style.css';
import Header from './componentes/inicio/Header'; 
import Home from './pages/Home';
import Formulario from './componentes/Formularios/Registrate';
import Login from './componentes/Formularios/iniciarSesion';
import Nosotros from './pages/About Us';
import Blog from './componentes/Blog/src/containers/App.js';
import Servicios from './componentes/inicio/Servicios';
import MiCuenta  from './componentes/inicio/Cuenta/components/miCuenta';
import Electricidad from './pages/Categorias/Electricidad';
import Elec1 from './pages/Categorias/Electricidad/Elec1';
import Elec2 from './pages/Categorias/Electricidad/Elec2';
import Elec3 from './pages/Categorias/Electricidad/Elec3';
import infoCuenta from './componentes/inicio/Cuenta/components/infoCuenta';
import infoContacto from './componentes/inicio/Cuenta/components/infoContacto';
import {Toaster, toast} from 'react-hot-toast'
import Plomeria from './pages/Categorias/Plomeria';
import Plo1 from './pages/Categorias/Plomeria/Plo1';
import Plo2 from './pages/Categorias/Plomeria/Plo2';
import Programador from './pages/Categorias/Programador';
import Pro1 from './pages/Categorias/Programador/Pro1';
import Pro2 from './pages/Categorias/Programador/Pro2';
import Tecnico from './pages/Categorias/Tecnico';
import Tec1 from './pages/Categorias/Tecnico/Tec1';
import Tec2 from './pages/Categorias/Tecnico/Tec2';
import Mecanico from './pages/Categorias/Mecanico';
import Me1 from './pages/Categorias/Mecanico/Me1';
import Me2 from './pages/Categorias/Mecanico/Me2';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/iniciarSesion' exact component={Login} />
        <Route path='/Registrate' exact component={Formulario} />
        <Route path='/Blog' exact component={Blog} />
        <Route path='/Servicios' exact component={Servicios} />
        <Route path='/micuenta' exact component={MiCuenta}/>
        <Route path='/About Us' exact component={Nosotros} />
        <Route path='/Electricidad' exact component={Electricidad} />
        <Route path='/Elec1' exact component={Elec1} />
        <Route path='/Elec2' exact component={Elec2} />
        <Route path='/Elec3' exact component={Elec3} />
        <Route path='/Publicate' exact component={Blog} />
        <Route path='/Cuenta' exact component={infoCuenta}/>
        <Route path='/Contactos' exact component={infoContacto}/>
        <Route path='/Plomeria' exact component={Plomeria} />
        <Route path='/Plo1' exact component={Plo1} />
        <Route path='/Plo2' exact component={Plo2} />
        <Route path='/Programador' exact component={Programador} />
        <Route path='/Pro1' exact component={Pro1} />
        <Route path='/Pro2' exact component={Pro2} />
        <Route path='/Tecnico' exact component={Tecnico} />
        <Route path='/Tec1' exact component={Tec1} />
        <Route path='/Tec2' exact component={Tec2} />
        <Route path='/Mecanico' exact component={Mecanico} />
        <Route path='/Me1' exact component={Me1} />
        <Route path='/Me2' exact component={Me2} />
        
      <Toaster/>
      </div>
    </Router>
  );
}

export default App;
