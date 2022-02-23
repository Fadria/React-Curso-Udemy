import React from 'react'; // Librería de React
import ReactDOM from 'react-dom'; // Librería para hacer renderizaciones en el HTML
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

// Obtenemos el elemento raíz y renderizamos nuestra etiqueta
const divRoot = document.querySelector('#root');

//ReactDOM.render(<PrimeraApp saludo="Hola desde el index.js" otra={22323} />, divRoot);
ReactDOM.render(<CounterApp />, divRoot);