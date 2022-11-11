import React from "react";
import { NavLink } from "react-router-dom";

export default class Landing extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <>
      <img src="" alt="imagen-inicial" />
      <h1>Bienvenidos a la app countries</h1>
      <button>
        <NavLink to="/countries">Home</NavLink>
      </button>
      </>
    )
  }
}