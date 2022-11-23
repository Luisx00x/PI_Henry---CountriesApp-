import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectsReset, activitiesHandler, filtersButton, selectHandler, orderContinent} from './Handlers.js'
import s from './buttonBar.module.css'

export default function ButtonBar (props){

  const [activitySelected, setActivitySelected] = useState("none");
  const [continentSelect, setContinentSelect] = useState(false);
  const [selected, setSelected] = useState("all");
  const [names, setNames] = useState("DESC");
  const [population, setPopulation] = useState("DESC");

  const dispatch = useDispatch();

  const continentSort = useSelector(state => state.continentSort);
  const activities = useSelector(state => state.activities);
  const allCountries = useSelector(state => state.allCountries);
  const countries = useSelector(state => state.countries);

 const selectValues = ['Africa', 'Americas', 'Asia', 'Antarctic', 'Europe', 'Oceania'];

  return (
    <>

      <div className={s.buttonBar}>

      {activities.length > 0 ? 
      <select value={activitySelected} onChange={(e) => setActivitySelected(e.target.value)}>
        <option
        onClick={ () => { 
          selectsReset(setContinentSelect, allCountries, dispatch)
          setSelected( prev => "all") 
        } } 
        value="none">-- Seleccione una actividad --</option>

        {activities ? activities.map( element => {
          return <option 
          key={element.searchName} 
          value={element.searchName}
          onClick={(e) => {
            activitiesHandler(e, setContinentSelect, dispatch)
          }}>{element.searchName}</option>
        }) : null}
        
      </select> : null}

      {continentSelect ? null : 
      <button onClick={ () => orderContinent(continentSort, countries, dispatch)}>
        Ordenar por contienente
      </button>}
      
      { activitySelected !== "none" ? null : 
      <select id="select" value={selected} onChange={(e) => setSelected(e.target.value)} >
        
        <option value="all" onClick={() => selectsReset(setContinentSelect, allCountries, dispatch)}>
          Mostrar todos
        </option>

        { selectValues.map( element => {
          return <option key={element} value={element} onClick={ (e) => {
            selectHandler(e, allCountries, setContinentSelect, dispatch)
          }}>{element}</option>
        })}
    
      </select>}

      {<button onClick={() =>{
        filtersButton("name", countries, names, allCountries, dispatch)
        setNames( prev => prev === "DESC" ? "ASC" : "DESC")}}>
        Alfabetico {names}
      </button>}

      {<button onClick={() =>{ 
        filtersButton("population",countries, population, allCountries, dispatch) 
        setPopulation( prev => prev === "DESC" ? "ASC" : "DESC")}}>
        poblacion {population}
      </button>}
        
      </div>

    </>
  )
}