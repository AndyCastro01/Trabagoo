import logo from './logo.svg'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './componentes/Formularios/styleH.css';
import './componentes/inicio/StyleH.css';
import './pages/Productos_Presentacion/style.css';
import Header from './componentes/inicio/Header'; 
import Home from './pages/Home';
import Formulario from './componentes/Formularios/Registrate';
import Login from './componentes/Formularios/Iniciar Sesion';
import Nosotros from './pages/About Us';


import Blog from './componentes/Blog/src/containers/App.js';

import Servicios from './componentes/inicio/Servicios';
import micuenta  from './componentes/inicio/Cuenta/components/miCuenta';
import Electronicos from './pages/Categorias/Electronicos';
import Laple from './pages/Categorias/Electronicos/Laple';
import Delap from './pages/Categorias/Electronicos/Delap';
import Aiph from './pages/Categorias/Electronicos/Aiph';
import Redmin10 from './pages/Categorias/Electronicos/Redmin10';
import Xp3 from './pages/Categorias/Electronicos/Xp3';
import Sagat from './pages/Categorias/Electronicos/Sagat';
import ssd from './pages/Categorias/Electronicos/ssd';
import Muebles from './pages/Categorias/Muebles';
import Saes from './pages/Categorias/Muebles/Saes';
import Saesmi from './pages/Categorias/Muebles/Saesmi';
import Juco from './pages/Categorias/Muebles/Juco';
import Jbm from './pages/Categorias/Muebles/Jbm';
import Jcb from './pages/Categorias/Muebles/Jcb';
import CIR from './pages/Categorias/Muebles/CIR';
import Jcbs from './pages/Categorias/Muebles/Jcbs';
import Juguetes from './pages/Categorias/Juguetes';
import Mer from './pages/Categorias/Juguetes/Mer';
import Fun from './pages/Categorias/Juguetes/Fun';
import Car from './pages/Categorias/Juguetes/Car';
import Robot from './pages/Categorias/Juguetes/Robot';
import Muñe from './pages/Categorias/Juguetes/Muñe';
import Belleza from './pages/Categorias/Belleza';
import Serum from './pages/Categorias/Belleza/Serum';
import Revlon from './pages/Categorias/Belleza/Revlon';
import Tresemme from './pages/Categorias/Belleza/Tresemme';
import Des from './pages/Categorias/Belleza/Des';
import axe from './pages/Categorias/Belleza/axe';
import herramientas from './pages/Categorias/herramientas';
import Multimetro from './pages/Categorias/Herramientas/multimetro';
import conta from './pages/Categorias/Herramientas/conta';
import regulador from './pages/Categorias/Herramientas/regulador';
import blck from './pages/Categorias/Herramientas/blck';
import puli from './pages/Categorias/Herramientas/puli';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/Iniciar Sesion' exact component={Login} />
        <Route path='/Registrate' exact component={Formulario} />
        <Route path='/Blog' exact component={Blog} />
        <Route path='/Servicios' exact component={Servicios} />
        <Route path='/micuenta' exact component={micuenta}/>
        <Route path='/About Us' exact component={Nosotros} />
        
        
        <Route path='/Electronicos' exact component={Electronicos} />
        <Route path='/Laple' exact component={Laple} />
        <Route path='/Delap' exact component={Delap} />
        <Route path='/Aiph' exact component={Aiph} />
        <Route path='/Redmin10' exact component={Redmin10} />
        <Route path='/Xp3' exact component={Xp3} />
        <Route path='/Sagat' exact component={Sagat} />
        <Route path='/ssd' exact component={ssd} />
        <Route path='/Muebles' exact component={Muebles} />
        <Route path='/Saes' exact component={Saes} />
        <Route path='/Saesmi' exact component={Saesmi} />
        <Route path='/Juco' exact component={Juco} />
        <Route path='/Jbm' exact component={Jbm} />
        <Route path='/Jcb' exact component={Jcbs} />
        <Route path='/CIR' exact component={CIR} />
        <Route path='/Jcbs' exact component={Jcbs} />
        <Route path='/Juguetes' exact component={Juguetes} />
        <Route path='/Mer' exact component={Mer} />
        <Route path='/Fun' exact component={Fun} />
        <Route path='/Car' exact component={Car} />
        <Route path='/Robot' exact component={Robot} />
        <Route path='/Muñe' exact component={Muñe} />
        <Route path='/Belleza' exact component={Belleza} />
        <Route path='/Serum' exact component={Serum} />
        <Route path='/Revlon' exact component={Revlon} />
        <Route path='/Tresemme' exact component={Tresemme} />
        <Route path='/Des' exact component={Des} />
        <Route path='/axe' exact component={axe} />
        <Route path='/herramientas' exact component={herramientas} />
        <Route path='/Multimetro' exact component={Multimetro} />
        <Route path='/conta' exact component={conta} />
        <Route path='/regulador' exact component={regulador} />
        <Route path='/blck' exact component={blck} />
        <Route path='/puli' exact component={puli} />
      
      </div>
    </Router>
  );
}

export default App;
