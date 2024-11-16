import React from 'react'
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';

// import { HellowWorldApp} from './HelloWorldApp'
import './styles.css';
import { CounterApp } from './CounterApp';
import ComponentTest from './ComponentTest';

const nombre = prompt("Ingrese su nombre: ");
const fecha = Date();
const contenido = "lorem ipsum"


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title="hola" subtitle="16 de Noviembre"/> */}
        {/* <CounterApp value = {20358}/> */}
        <ComponentTest name={nombre} date={fecha} content={contenido}></ComponentTest>
    </React.StrictMode>
);