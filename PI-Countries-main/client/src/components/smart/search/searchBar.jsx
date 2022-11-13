import React, {useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import s from './searchBar.module.css';
import {resetPag, search, searchID} from '../../../redux/actions'

function SearchBar (props){

  const [input, setInput] = useState(""); //Recibe como valor inicial un estado vacio

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(e.target.value)
    props.search(e.target.value)
  }

  return (
    <form onSubmit={(e) =>{
      e.preventDefault();
      //Aqui se invoca la funcion que se envia por props con el valor del input para la busqueda
      setInput("");
      //console.log(props.searching)
      props.searchID(props.searching);
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

function mapDispatchToProps (dispatch){
  return {
    search: function(input){
      dispatch(search(input))
    },
    searchID: function(data){
      dispatch(searchID(data))
    }
  }
}

function mapProps(state){
  return {
    searching: state.search
  }
} 

export default connect(mapProps, mapDispatchToProps)(SearchBar)