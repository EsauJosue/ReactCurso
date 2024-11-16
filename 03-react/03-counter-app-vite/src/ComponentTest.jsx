// import React from 'react'
import PropTypes from "prop-types"
const ComponentTest = ({name, date, content}) => {
  return (
    <>
    <div className="box">
        <div className="box__title">
            <h2>Nombre: {name}</h2>
            <p>Fecha: {date}</p>
        </div>
        <div className="box__content">
            <p>{content}</p>
        </div>
        <button onClick={ function(){console.log("Botón presionado")}}> Ingresar</button>
    </div>
    </>
  )
}
ComponentTest.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default ComponentTest
