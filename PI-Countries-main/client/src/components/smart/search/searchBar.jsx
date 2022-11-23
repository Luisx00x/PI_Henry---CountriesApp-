import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import s from './searchBar.module.css';
import {resetPag, searchID} from '../../../redux/actions';

export default function SearchBar (props){

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  return (
    <form onSubmit={(e) =>{
      e.preventDefault();
      dispatch(searchID(input))
      setInput("");
      dispatch(resetPag())
    }}>
      <input 
        type="text"
        placeholder="Nombre de país..."
        onChange={handleInput}
        value = {input}
        />
        <input type="submit" value="Buscar" className={s.button} />
    </form>
  );
}
