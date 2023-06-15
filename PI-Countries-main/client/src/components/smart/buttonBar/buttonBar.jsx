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

    <div className={s.buttonBar}>

      <div className={s.orderButtons}>

        <div className={s.filtersTitel}>
          <h4>Filtrar por:</h4>
        </div>
        
        <div className={s.orders}>

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

          { activitySelected !== "none" ? null : 
          <select id="select" value={selected} onChange={(e) => setSelected(e.target.value)} >
            
            <option value="all" onClick={() => selectsReset(setContinentSelect, allCountries, dispatch)}>
            -- Mostrar todos --
            </option>

            { selectValues.map( element => {
              return <option key={element} value={element} onClick={ (e) => {
                selectHandler(e, allCountries, setContinentSelect, dispatch)
              }}>{element}</option>
            })}
      
          </select>}

        </div>
      
      </div>

      <div className={s.orderButtons}>

        <div className={s.orderTitle}>
          <h4>Ordernar por:</h4>
        </div>
        
        <div className={s.orders}>

          {continentSelect ? null : 
          <button onClick={ () => orderContinent(continentSort, countries, dispatch)}>
            Continentes alfabeticamente de {continentSort === "ASC" ? "A-Z " : "Z-A"}
          </button>}

          {<button onClick={() =>{
            filtersButton("name", countries, names, allCountries, dispatch)
            setNames( prev => prev === "DESC" ? "ASC" : "DESC")}}>
            { names === "DESC" ? "Países A-Z" : "Países Z-A"}
          </button>}
          
          { <button onClick={() =>{ 
            filtersButton("population",countries, population, allCountries, dispatch) 
            setPopulation( prev => prev === "DESC" ? "ASC" : "DESC")}}>
            { population === "DESC" ? "Población ascendente" : "Población descendente"}
          </button>}

        </div>

      </div>
        
    </div>
  )
}