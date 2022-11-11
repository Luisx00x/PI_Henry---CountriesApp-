import React from 'react';
import s from './navbar.module.css'
import SearchBar from '../../smart/search/searchBar.jsx';

export default class Navbar extends React.Component{
  constructor(props){
    super(props)
  }
    render(){
      return (
      <nav className={s.nav}>
        <h1 className={s.title}>Henry Countries</h1>
        <SearchBar />
        {/* <label className={s.searchLabel}>Buscar un país:</label>
        <input type="text" name='searchCountry' placeholder='Nombre de país...' />
        <button className={s.searchButton}>Buscar</button> */}
      </nav>
      )
    }

  
}