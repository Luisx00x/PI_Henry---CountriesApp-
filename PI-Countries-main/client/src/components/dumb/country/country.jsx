import React from "react";
import s from './country.module.css';

export default class Country extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    let {name, flag, continent} = this.props;
    //console.log(this.props)

    return (
      <div className={s.country}>
        <img src={flag} alt="country-flag"/>
        <h2>{name}</h2>
        <h3>{continent}</h3>
      </div>
    )
  }

}