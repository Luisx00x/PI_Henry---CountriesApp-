import React from 'react';
import s from './navbar.module.css'
import SearchBar from '../../smart/search/searchBar.jsx';
import { NavLink, Route } from 'react-router-dom';

export default class Navbar extends React.Component{

    render(){
      return (
      <nav className={s.nav}>
        <h1 className={s.title}>Henry Countries</h1>
        <div className={s.links}>
        <NavLink className={s.navItem} activeClassName={s.selected} to='/home'>Home</NavLink>
        <NavLink className={s.navItem} activeClassName={s.selected} to='/activities'>Activities</NavLink>
        <Route exact path={["/home"]} render={ (location) => <SearchBar query={location} />}/>
        </div>
        
      </nav>
      )
    }

  
}