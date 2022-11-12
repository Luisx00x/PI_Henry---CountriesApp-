
import React from 'react';
import { useHistory } from 'react-router-dom';
import s from './countryDetails.module.css'

export default function CountryDetails (props) {

  const {nameTranslations, area, flag, continent, sub_region, activities, capital, population, ID} = props.props;

  const history = useHistory();

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
        <h3>Actividades</h3>
        <ul>

          {activities !== undefined ? activities.map( element => <li>{element.name}</li>) : 
          <p>No hay actividades registradas en este país.</p>}
        
        </ul>
      </div>

      <div>
      <img className={s.flagImg} src={flag} alt="flag-img" />
      </div>  

    </div>
  )
}