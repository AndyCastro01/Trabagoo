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
    
      <Toaster/>
      </div>
    </Router>
  );
}

export default App;
