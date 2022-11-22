import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectsReset, activitiesHandler, filtersButton, selectHandler, orderContinent} from './Handlers.js'

export default function ButtonBar (props){

  const [activitySelected, setActivitySelected] = useState("none");
  const [continentSelect, setContinentSelect] = useState(false);
  const [selected, setSeleted] = useState("all");

  const dispatch = useDispatch();

  const continentSort = useSelector(state => state.continentSort);
  const activities = useSelector(state => state.activities);
  const allCountries = useSelector(state => state.allCountries);
  const countries = useSelector(state => state.countries);
  const names = useSelector(state => state.names);
  const population = useSelector(state => state.population);

  return (
    <>

      <div>

      {activities.length > 0 ? 
      <select value={activitySelected} onChange={(e) => setActivitySelected(e.target.value)}>
        <option
        onClick={ () => selectsReset(setContinentSelect, allCountries, dispatch) } 
        value="none">-- Seleccione una actividad --</option>

        {activities ? activities.map( element => {
          return <option 
          key={element} 
          value={element}
          onClick={(e) => {
            activitiesHandler(e, setContinentSelect, dispatch)
          }}>{element}</option>
        }) : null}
        
      </select> : null}

      {continentSelect ? null : <button onClick={ () => orderContinent(continentSort, countries, dispatch)}>Ordenar por contienente</button>}
      
      { activitySelected !== "none" ? null : <select id="select" value={selected} onChange={(e) => setSeleted(e.target.value)} >
        <option value="all" onClick={() => selectsReset(setContinentSelect, allCountries, dispatch)}>Mostrar todos</option>
        
        {/* HAcer una arreglo con el nombre de los paises y mapear las opciones */}
        <option value ="Americas" onClick={(e) => {
          selectHandler(e, allCountries, setContinentSelect, dispatch)
          }}>Americas</option>

        <option value ="Europe" onClick={(e) => {
          selectHandler(e, allCountries, setContinentSelect, dispatch)
          }}>Europe</option>
          
        <option value ="Oceania" onClick={(e) => {
          selectHandler(e, allCountries, setContinentSelect, dispatch)           
          }}>Oceania</option>

        <option value ="Africa" onClick={(e) => {
          selectHandler(e, allCountries, setContinentSelect, dispatch)
          }}>Africa</option>
        
        <option value ="Asia" onClick={(e) => {
          selectHandler(e, allCountries, setContinentSelect, dispatch)
          }}>Asia</option>
        
        <option value ="Antarctic" onClick={(e) => {
          selectHandler(e, allCountries, setContinentSelect, dispatch)
          }}>Antartic</option>
      </select>}

      {<button onClick={() =>{filtersButton("name", countries, names, allCountries, dispatch)}}>Alfabetico {names}</button>}

      {<button onClick={() =>{ filtersButton("population",countries, population, allCountries, dispatch) }}>poblacion {population}</button>}
        
      </div>

    </>
  )
}