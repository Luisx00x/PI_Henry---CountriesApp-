import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import s from './searchBar.module.css';
import {resetPag, searchID} from '../../../redux/actions';
import { useHistory, useLocation } from 'react-router-dom';

export default function SearchBar (props){

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const location = useLocation();

  const history = useHistory();

  console.log(location)

  return (
    <form onSubmit={(e) =>{
      e.preventDefault();
      dispatch(searchID(location.search))
      setInput("");
      dispatch(resetPag())
    }}>
        <input 
        type="text"
        placeholder="Nombre de país..."
        onChange={handleInput}
        value = {input}
        />
        <input type="submit" value="Buscar" className={s.button} onClick = { () => {
         if(input) history.push({search: `name=${input}`})
         else history.push()
        }} />
    </form>
  );
}
