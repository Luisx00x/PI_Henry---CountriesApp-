import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './searchBar.module.css';
import {resetPag, searchID} from '../../../redux/actions';
import { useHistory, useLocation } from 'react-router-dom';

export default function SearchBar (props){

  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const dispatch = useDispatch();

  const allCountries = useSelector(state => state.allCountries)
  
  useEffect( () => {
    
    let result = allCountries.filter( ele => ele.name.toLowerCase().includes(input.toLocaleLowerCase()))
    setResult( prev => {
      return [...result]
    })
  },[input, allCountries])

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const location = useLocation();

  const history = useHistory();

  return (
    <>
      <form onSubmit={(e) =>{
        e.preventDefault();
        dispatch(searchID(location.search))
        setInput("");
        dispatch(resetPag())
      }}>
          <input 
          type="search"
          name="searchCountry"
          list="countriesList"
          placeholder="Nombre de país..."
          onChange={handleInput}
          value = {input}
          />
          <input type="submit" value="Buscar" className={s.button} onClick = { () => {
          if(input) history.push({search: `name=${input}`})
          else history.push()
          }} />
      </form>

      <datalist id="countriesList">
        {
            result?.map( country => {
            return <option key={country.name} value={country.name}/>
          })
          
        }
      </datalist>
    </>

    
  );
}
