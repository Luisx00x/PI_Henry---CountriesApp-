import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './searchBar.module.css';
import {resetPag, searchID} from '../../../redux/actions';
import { useHistory, useLocation } from 'react-router-dom';
import { BACK_URL } from '../../../App';

export default function SearchBar (props){

  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const allCountries = useSelector(state => state.allCountries)
  
  useEffect( () => {
      if(isLoading){
        try{
          fetch(`${BACK_URL}/home/?name=${input}`)
          .then(res => res.json())
          .then(res => {
            setResult( prev => [...res]);
            setIsLoading(false);
          })
        }catch(err){
          console.log(err)
        } 
      };
  },[input, allCountries])

  const handleInput = (e) => {
    setInput(e.target.value);
    setIsLoading( prev => true)
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
      }}
      className={s.container}
      >
          <input 
          type="search"
          list="countriesList"
          placeholder="Nombre de país..."
          onChange={(e) => handleInput(e)}
          vlue = {input}
          className={s.input}
          />
           
          <div className={s.imgContainer}>
            {isLoading ? <img className={s.img} src="./img/VAyR.gif" alt="loading" /> : null}
          </div>

          <input type="submit" value="Buscar" className={s.button} onClick = { () => {
          if(input) history.push({search: `name=${input}`})
          else history.push()
          }}
          />

      </form>

      <datalist id="countriesList">
        {
            !isLoading ? result?.map( country => {
            return <option key={country.name} value={country.name}/>
          }) : null
          
        }
      </datalist>
    </>

    
  );
}
