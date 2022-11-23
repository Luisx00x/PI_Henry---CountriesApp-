
import React from "react";
import { useState } from "react";
import Activity from "../../dumb/activity/activity";

export default function Activities (props) {

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(false)
  
  function inputHandler (e, set) {
    set( prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  function durationHandler (e, set){
    if(parseInt(e.target.value) && e.target.value > 0){
      set( prev => {
        return {
          ...prev,
          duration: parseInt(e.target.value)
        }
      })
    }
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

  
  async function postInfo(data, event){    
    
    event.preventDefault();
     await fetch('http://localhost:3001/activities', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => setMessage(res))
    .catch(error => {
      setErrorMessage(true)
      setMessage(error.message)
    })

  }
 
  return (
    <>
      <Activity submit={postInfo} inputHandler = {inputHandler} multipleInput = {multipleInputHandler}
       durationHandler = {durationHandler} message={message} error={errorMessage}>       
       </Activity>
    </>
  )

}