import React from 'react';
import ReactDOM from 'react-dom';
import SnakeGame from '../src/SnakeGame.jsx'
import './index.css'

function menuC(){
ReactDOM.render(
  <React.StrictMode>
    <h1>Juego-simple-snake</h1>
    <div className="textWrapper">
      <p className="subTitle">
      <a href="https://www.npmjs.com/package/react-simple-snake" target="_blank" rel="noopener noreferrer">NPM</a> -
      <a href="https://github.com/MaelDrapier/react-simple-snake" target="_blank" rel="noopener noreferrer"> Github</a>
      </p>
      <p id="instructions">Usa las flechas del teclado o W/A/S/D para Jugar</p>
      <p className="subTitle">Un simple snake game creado con
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"> React </a>
      la libreria de JavaScript</p>
    </div>
    <SnakeGame />
  </React.StrictMode>,
  document.getElementById('root')
);
}

export default menuC;
