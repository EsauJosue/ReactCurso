import React from 'react'
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';

// import { HellowWorldApp} from './HelloWorldApp'
import './styles.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title="hola" subtitle="16 de Noviembre"/> */}
        <CounterApp value = {20358}/>
    </React.StrictMode>
);