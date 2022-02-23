import React from 'react'; // Librería de React
import ReactDOM from 'react-dom'; // Librería para hacer renderizaciones en el HTML

const saludo = <h1>Hola Mundo</h1>;

// Obtenemos el elemento raíz y renderizamos nuestra etiqueta
const divRoot = document.querySelector('#root');
ReactDOM.render(saludo, divRoot);