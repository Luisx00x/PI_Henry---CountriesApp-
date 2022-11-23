import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./pagination.module.css";
import { nextbuttonHandler, numberButtonHandler, prevButtonHandler } from "./paginationHandler";

export default function Pagination (props) {

  const dispatch = useDispatch();

  const actualPage = useSelector( state => state.actualPage );
  const countries = useSelector( state => state.countries);
  const currentIndex = useSelector( state => state.nextPage);

  const maxLength = countries.length;

  let numberOfPages = 10;

  const lastPage = Math.floor(maxLength/numberOfPages)

  return(
    <div>
      
      { lastPage > 0 ? <div className={s.paginationBar}>
      <button className={s.paginationButton} onClick={() => { 
      prevButtonHandler(actualPage, numberOfPages, dispatch)}}>
        <svg className={s.prevButtonImg} viewBox="2 -1 10 8">
          <polygon points="0 0, 10 3.5, 0 7" /> 
        </svg>
        <span className={s.buttonText}>Anterior</span>
      </button>
          
      {actualPage > 0 ? 
      <span  className={s.paginationItems} onClick={ () => numberButtonHandler(0, numberOfPages, dispatch)}>
      {1}</span> : null}

      {actualPage > 3 ? <label> ... </label> : null}

      {actualPage > lastPage - 1 && lastPage > 6 ? 
      <span className={s.paginationItems} onClick={ () => numberButtonHandler(actualPage - 5, numberOfPages, dispatch)}>
        {actualPage - 4} </span> : null}

      {actualPage > lastPage - 2 && lastPage > 5 ? 
      <span className={s.paginationItems} onClick={ () => numberButtonHandler(actualPage - 4, numberOfPages, dispatch)}>
        {actualPage - 3} </span> : null}
      
      {actualPage > lastPage - 3 && lastPage > 6 ? 
      <span className={s.paginationItems} onClick={ () => numberButtonHandler(actualPage - 3, numberOfPages, dispatch)}>
        {actualPage - 2} </span> : null}
      
      {actualPage > 2 ? 
      <span  className={s.paginationItems}onClick={ () => numberButtonHandler(actualPage - 2, numberOfPages, dispatch)}>
        {actualPage - 1} </span> : null}

      {actualPage > 1 ? 
      <span  className={s.paginationItems}onClick={ () => numberButtonHandler(actualPage - 1, numberOfPages, dispatch)}>
        {actualPage}</span> : null}
      

      {<span className={s.paginationItemSelected}>{actualPage + 1}</span>}
      

      {actualPage < lastPage - 1 ? 
      <span className={s.paginationItems} onClick={ () => numberButtonHandler(actualPage + 1, numberOfPages, dispatch)}>
        {actualPage + 2}</span> : null}

      {actualPage < lastPage - 2 ? 
      <span className={s.paginationItems} onClick={ () => numberButtonHandler(actualPage + 2, numberOfPages, dispatch)}>
        {actualPage + 3}</span> : null}
    
      {actualPage < 3 && lastPage > 6 ? 
      <span className={s.paginationItems} onClick={ () => numberButtonHandler(actualPage + 3, numberOfPages, dispatch)}>
        {actualPage + 4}</span> : null}

      {actualPage < 2 && lastPage > 5 ?
      <span className={s.paginationItems} onClick={ () => numberButtonHandler(actualPage + 4, numberOfPages, dispatch)}>
        {actualPage + 5}</span> : null}

      {actualPage < 1 && lastPage > 6 ? 
      <span className={s.paginationItems} onClick={ () => numberButtonHandler(actualPage + 5, numberOfPages, dispatch)}>
        {actualPage + 6}</span> : null}
      
      {actualPage < lastPage - 3 ? <label> ... </label> : null}

      {actualPage < lastPage ?
      <span className={s.paginationItems} onClick={ () => numberButtonHandler(lastPage, numberOfPages, dispatch)}>
        {lastPage + 1}</span> : null}     

      <button className={s.paginationButton} onClick={ () => {
        nextbuttonHandler(currentIndex, maxLength, numberOfPages, dispatch) } }>
        <span className={s.buttonText}>Siguiente</span>
        <svg className={s.nextButtonImg} viewBox="2 -1 8 8">
          <polygon points="0 0, 10 3.5, 0 7" /> 
        </svg>
      </button>
      
      </div> : null}
    </div>
  )
}
