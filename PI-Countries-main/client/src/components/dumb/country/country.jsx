import React from "react";
import { NavLink } from "react-router-dom";
import s from './country.module.css';

export default class Country extends React.Component{

  render(){

    let {name, flag, continent, id, population} = this.props;

    return (
      <div className={s.country}>
        <NavLink className={s.countryLink} exact to={`/home/${id}`}>
        <div>
          <img src={flag} alt="country-flag"/>
          <h2>{name}</h2>
          <h3>{continent}</h3>
          <h3>{population}</h3>
        </div>
        </NavLink>
      </div>
    )
  }

}