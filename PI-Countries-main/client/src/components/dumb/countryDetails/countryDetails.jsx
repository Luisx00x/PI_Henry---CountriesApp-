
import React from 'react';
import { useHistory } from 'react-router-dom';
import s from './countryDetails.module.css'

export default function CountryDetails (props) {

  const {nameTranslations, area, flag, continent, sub_region, Activities, capital, population, ID} = props.props;

  const history = useHistory();

  console.log(Activities)

  return (
    <div className={s.datasheet}>
      <button onClick={history.goBack}>Regresar</button>
      <div>
        <h2>ID: {ID}</h2>
        <h2>Nombre: {nameTranslations}</h2>
        <p><b>Capital: </b>{capital}</p>
        <p><b>Contienente: </b>{continent}</p>
        <p><b>Sub Region: </b>{sub_region}</p>
        <p><b>Área: </b> {area}</p>
        <p><b>Población: </b>{population}</p>
      </div>

      <div>

        <h3>Actividades</h3>
      <ul>
          {Activities ? 
          ( Activities.length > 0 ? Activities.map( element => {
            return <li key={element.id}><b>{element.name}</b> Dificultad: {element.dificulty} Duración: {element.duration} Temporada: {element.season} </li> }) : 
          <p>No hay actividades turisticas registradas para este país</p>) : 
          null}
          {/* Tiene que ser un condicional null porque la primera vez que monta es un undefined */}
        </ul>

      </div>

      <div>
      <img className={s.flagImg} src={flag} alt="flag-img" />
      </div>  

    </div>
  )
}