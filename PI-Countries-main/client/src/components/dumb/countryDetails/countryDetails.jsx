
import React from 'react';
import { useHistory } from 'react-router-dom';
import s from './countryDetails.module.css'

export default function CountryDetails (props) {

  const {nameTranslations, area, flag, continent, sub_region, Activities, capital, population, ID} = props.props;

  const history = useHistory();

  return (
    <>
    <button onClick={history.goBack}>Regresar</button>
    
    <div className={s.datasheet}>

      <div className={s.detailsData}>

        <div className={s.details}>

          <h2>ID: {ID}</h2>
          <h2>Nombre: {nameTranslations}</h2>
          <p><b>Capital: </b>{capital}</p>
          <p><b>Contienente: </b>{continent}</p>
          <p><b>Sub Region: </b>{sub_region}</p>
          <p><b>Área: </b> {area}</p>
          <p><b>Población: </b>{population}</p>

        </div>

        <div>

          <img className={s.flagImg} src={flag} alt="flag-img" />

        </div>    

      </div>

        <div className={s.activitiesContain}>

          <h2>Actividades</h2>
          <ul className={s.activities}>
              {Activities ? 
              ( Activities.length > 0 ? Activities.map( element => {
                return <div key={element.id} className={s.activities_form}><li> <b className={s.nameLi}>{element.name}:</b></li> <span className={s.liItems}>Dificultad: {element.dificulty}</span> <span className={s.liItems}>Duración: {element.duration}</span> <span className={s.liItems}>Temporada: {element.season}</span></div> }) : 
                <p className={s.liItems}>No hay actividades turisticas registradas para este país</p>) : 
                null}
              {/* Tiene que ser un condicional null porque la primera vez que monta es un undefined */}
          </ul>

        </div>

    </div>
    </>
  )
}