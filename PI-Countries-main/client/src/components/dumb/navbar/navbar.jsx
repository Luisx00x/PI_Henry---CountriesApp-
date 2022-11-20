import React from 'react';
import s from './navbar.module.css'
import SearchBar from '../../smart/search/searchBar.jsx';
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component{
  constructor(props){
    super(props)
  }
    render(){
      return (
      <nav className={s.nav}>
        <h1 className={s.title}>Henry Countries</h1>

        <div className={s.links}>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/activities'>Activities</NavLink>
        <SearchBar />
        </div>
        
      </nav>
      )
    }

  
}