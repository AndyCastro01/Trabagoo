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
import MiCuenta  from './componentes/inicio/Cuenta/components/miCuenta';
import Electricidad from './pages/Categorias/Electricidad';
import Elec1 from './pages/Categorias/Electricidad/Elec1';
import Elec2 from './pages/Categorias/Electricidad/Elec2';

import Elec3 from './pages/Categorias/Electricidad/Elec3';

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
import menuC from './pages/Categorias/CREXE9VPdnGcY/EE d tcarpe m ss aencontr ee eju/Rfgn rf yn pnecrgn qry whrthvgb/demo/index'



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
        <Route path='/micuenta' exact component={MiCuenta}/>
        <Route path='/About Us' exact component={Nosotros} />
        
        
        <Route path='/Electricidad' exact component={Electricidad} />
        <Route path='/Elec1' exact component={Elec1} />
        <Route path='/Elec2' exact component={Elec2} />
        
        <Route path='/Elec3' exact component={Elec3} />
   
     
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
        <Route path='/Publicate' exact component={Blog} />
        <Route path='/menuC' exact component={menuC} />

      </div>
    </Router>
  );
}

export default App;
