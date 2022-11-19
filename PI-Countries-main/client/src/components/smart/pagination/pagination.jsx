import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firstElement, nextButton, nextPage, prevButton } from "../../../redux/actions";

//ME TENGO QUE TRAER EL CSS QUE USABA EN COUNTRIES

export default function Pagination (props) {

  const dispatch = useDispatch();

  const actualPage = useSelector( state => state.actualPage );

  const countries = useSelector( state => state.countries);
  console.log(countries, "Countries")

  const currentIndex = useSelector( state => state.nextPage);

  const maxLength = countries.length;

  let numberOfPages = 10
  
  console.log(numberOfPages, "NOP dentro del pag")

  function nextbuttonHandler (){

      //el elemento esta al final   la longitud es menor a min-ele
    if(currentIndex === maxLength || maxLength < numberOfPages || currentIndex > maxLength) return

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
      <p> {actualPage + 1},
          {actualPage + 2},
          {actualPage + 3},
          {actualPage + 4},
          ..., Aqui va la ultima pag </p> :

        <p> ...,
            {actualPage - 3},
            {actualPage - 2},
            {actualPage - 1}
        </p>
      }
        
      <button onClick={nextbuttonHandler}>Siguiente</button>
      </div>
  )
}