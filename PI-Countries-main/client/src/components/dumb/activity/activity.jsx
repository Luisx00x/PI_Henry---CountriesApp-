
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import s from './activity.module.css';
import { durationValidator, nameValidator } from "./validationHandlers.js";

export default function Activity (props) {

  const countries = useSelector( state => state.allCountries)

  const history = useHistory()
  
  let [input, setInput] = useState(
    {
      name: "",
      dificulty: "1",
      duration: 0,
      season: "Verano",
      countryAsociations: [],
    });

  let [error, setError] = useState(
    {
      nameError: "",
      dificultyError: "",
      durationError: "",
      seasonError: ""
    }
  )

  return (
    <>
    <button onClick={history.goBack}>Atras</button>
      <h2 className={s.title}>Agregar nueva actividad</h2>

      {props.message ? 
      <h3 className={ props.message.message || props.error ? s.failedMessage : s.successMessage}>
        {props.message.message ? props.message.message : props.message}
      </h3>  : null}
      
        <form className={s.formStyle}>
          <div className={s.form_item}>

            <label className={s.labels}>Nombre de actividad: </label>
            <input className={ error.nameError ? s.errorField : null } type="text" name="name" 
            value={input.name} onChange={(e) => {
              props.inputHandler(e, setInput)
              nameValidator(e.target.value, setError)
            }
            }/>
            { !error.nameError ? null : <span className={s.error}>{error.nameError}</span>}
          </div>
          
          <div className={s.form_item}>
            <label className={s.labels}>Dificultad: </label>
            <select name="dificulty" value={input.dificulty} onChange={(e) => props.inputHandler(e, setInput)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

          </div>
          
          <div className={s.form_item}>
          
            <label className={s.labels}>Duración: </label>
            <input type="number" name="duration" className={s.durationInput} value={input.duration}
              onChange={(e) => {
                props.durationHandler(e, setInput)
                durationValidator(e.target.value, setError)
              }}/> <span>Horas</span>
            { !error.durationError ? null : <span className={s.error}>{error.durationError}</span>}

          </div>
          
          <div className={s.form_item}>

            <label className={s.labels}>Temporada: </label>
            <select name="season" value = {input.season} onChange={(e) => props.inputHandler(e, setInput)}>
              <option>Verano</option>
              <option>Invierno</option>
              <option>Primavera</option>
              <option>Otoño</option>
            </select>

          </div>
          
          <div>

            <div className={s.select}>
          
              {
                (countries.length === 0) ? <span>No se han cargado paises en la app</span> :
                <select className={s.select} name="countryAsociations" multiple={true} value={input.countryAsociations} onChange ={ (e) => props.multipleInput(e, setInput)} >
                  {countries.map( element => <option key={element.ID} value={element.ID}>{element.name}</option> )}
                </select>
              }

            </div>

          </div>

        <h3 className={s.subTitle}>Paises seleccionados:</h3>
        
        <ul className={s.list_container}>
          {input.countryAsociations.map( element => {
            const value = countries.find( search => search.ID === element)
            return <li className={s.item} key={value.ID}>{value.name} <img className={s.flag} src={value.flag} alt="flag" /></li>
          })}
        </ul>

          <div className={s.select}>
            <input disabled={ error.nameError || error.dificultyError || error.durationError ||
            error.season || input.name === "" || input.duration < 1 || typeof input.duration !== "number" || 
            input.countryAsociations < 1 ? true : false} type="submit" value="Crear actividad turistica" 
            onClick={ (e) => {
              props.submit(input, e);
              setInput( prev => {
                return  {
                  name: "",
                  dificulty: "1",
                  duration: 0,
                  season: "Verano",
                  countryAsociations: [],
                }
              })
            }}/>
          </div>

        </form>

    </>
  )

}