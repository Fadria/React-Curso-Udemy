import React from 'react'; // Librería de React
import ReactDOM from 'react-dom'; // Librería para hacer renderizaciones en el HTML
import PrimeraApp from './PrimeraApp';
import './index.css';

// Obtenemos el elemento raíz y renderizamos nuestra etiqueta
const divRoot = document.querySelector('#root');

ReactDOM.render(<PrimeraApp />, divRoot);