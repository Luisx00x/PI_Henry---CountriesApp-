import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './landing.module.css';

export default class Landing extends React.Component{

  render(){
    return (
      <>
      <img className={s.landingImg} src="https://www.lavanguardia.com/files/og_thumbnail/uploads/2018/06/15/5fa43d71a111f.jpeg" alt="imagen-inicial" />
      <h2 className={s.landingTitle}>Bienvenidos a la app countries</h2>
        <NavLink to="/home"><button className={s.landingButton}>Home</button></NavLink>
      </>
    )
  }
}