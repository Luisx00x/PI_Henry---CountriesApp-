import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firstElement, nextButton, nextPage, prevButton } from "../../../redux/actions";

//ME TENGO QUE TRAER EL CSS QUE USABA EN COUNTRIES

export default function Pagination (props) {

  const dispatch = useDispatch();

  const actualPage = useSelector( state => state.actualPage );

  const allCountries = useSelector( state => state.allCountries);

  const currentIndex = useSelector( state => state.nextPage);

  const maxLength = allCountries.length;

  let numberOfPages = 10
  
  console.log(numberOfPages, "NOP dentro del pag")

  function nextbuttonHandler (){

    if(currentIndex === maxLength) return

    dispatch(nextButton())
    dispatch(firstElement(numberOfPages))
    dispatch(nextPage(numberOfPages))
    
  }

  function prevButtonHandler () {

    if(actualPage === 0) return

    if(actualPage === 1) numberOfPages = 9;
    dispatch(prevButton())
    dispatch(firstElement(numberOfPages))
    dispatch(nextPage(numberOfPages))

  }

  return(
    <div>
      
      <button onClick={prevButtonHandler}>Anterior</button>
      {actualPage < 9 ?
      <p> {actualPage},
          {actualPage + 1},
          {actualPage + 2},
          {actualPage + 3},
          ..., Aqui va la ultima pag </p> :

        <p> ...,
            {actualPage - 1},
            {actualPage - 2},
            {actualPage - 3}
        </p>
      }
        
      <button onClick={nextbuttonHandler}>Siguiente</button>
      </div>
  )
}