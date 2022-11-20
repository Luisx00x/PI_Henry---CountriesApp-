
import React from "react";
import Activity from "../../dumb/activity/activity";

export default function Activities (props) {

  function inputHandler (e, set) {
    set( prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  function multipleInputHandler (e, set) {
    set( prev => {
      return {
        ...prev,
        [e.target.name]: ( !prev.countryAsociations.includes(e.target.value) ) ? 
        [...prev.countryAsociations, e.target.value] : 
        prev.countryAsociations.filter( element => element !== e.target.value)
      }
    })
  }

  async function postInfo(data, event){      //Data debe ser un objeto
      event.preventDefault();
      await fetch('http://localhost:3001/activities', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => console.log(res))
    .then(res => console.log("SUCCESS", res))
    .catch(error => console.log(error))
  }

  return (
    <>
      <Activity submit={postInfo} inputHandler = {inputHandler} multipleInput = {multipleInputHandler}></Activity>
    </>
  )

}