import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { firstElement, nextButton, nextPage, prevButton, setPage } from "../../../redux/actions";
import s from "./pagination.module.css";

//ME TENGO QUE TRAER EL CSS QUE USABA EN COUNTRIES

export default function Pagination (props) {

  const dispatch = useDispatch();

  const actualPage = useSelector( state => state.actualPage );
  const countries = useSelector( state => state.countries);
  const currentIndex = useSelector( state => state.nextPage);

  const maxLength = countries.length;

  let numberOfPages = 10;

  const lastPage = Math.ceil(maxLength/numberOfPages - 1)

  function nextbuttonHandler (){

    if(currentIndex === maxLength || maxLength < numberOfPages || currentIndex > maxLength) return

    dispatch(nextButton())
    dispatch(firstElement(numberOfPages))
    dispatch(nextPage(numberOfPages))
    
  }

  function numberButtonHandler (page){

    dispatch(setPage(page));
    dispatch(firstElement(numberOfPages));
    dispatch(nextPage(numberOfPages));

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
      { lastPage > 0 ? <div>

      <button onClick={prevButtonHandler}>Anterior</button>
      
      {actualPage > 0 ? <span  className={s.paginationItems}onClick={ () => numberButtonHandler(0)}>{1}</span> : null}
      {actualPage > 3 ? <span className={s.paginationItems}>...</span> : null}

      {actualPage > lastPage - 1 && lastPage > 6 ? <span className={s.paginationItems}onClick={ () => numberButtonHandler(actualPage - 5)}>{actualPage - 4}</span> : null}
      {actualPage > lastPage - 2 && lastPage > 5 ? <span className={s.paginationItems}onClick={ () => numberButtonHandler(actualPage - 4)}>{actualPage - 3}</span> : null}
      {actualPage > lastPage - 3 && lastPage > 6 ? <span className={s.paginationItems}onClick={ () => numberButtonHandler(actualPage - 3)}>{actualPage - 2}</span> : null}
      
      {actualPage > 2 ? <span  className={s.paginationItems}onClick={ () => numberButtonHandler(actualPage - 2)}>{actualPage - 1}</span> : null}
      {actualPage > 1 ? <span  className={s.paginationItems}onClick={ () => numberButtonHandler(actualPage - 1)}>{actualPage}</span> : null}
      
      {<span className={s.paginationItemSelected}>{actualPage + 1}</span>}
      
      {actualPage < lastPage - 1 ? <span className={s.paginationItems}onClick={ () => numberButtonHandler(actualPage + 2)}>{actualPage + 2}</span> : null}
      {actualPage < lastPage - 2 ? <span className={s.paginationItems}onClick={ () => numberButtonHandler(actualPage + 3)}>{actualPage + 3}</span> : null}
    
      {actualPage < 3 && lastPage > 6 ? <span className={s.paginationItems}onClick={ () => numberButtonHandler(actualPage + 4)}>{actualPage + 4}</span> : null}
      {actualPage < 2 && lastPage > 5 ? <span className={s.paginationItems}onClick={ () => numberButtonHandler(actualPage + 5)}>{actualPage + 5}</span> : null}
      {actualPage < 1 && lastPage > 6 ? <span className={s.paginationItems}onClick={ () => numberButtonHandler(actualPage + 6)}>{actualPage + 6}</span> : null}
      
      {actualPage < lastPage - 3 ? <span className={s.paginationItems}>...</span> : null}
      {actualPage < lastPage ? <span className={s.paginationItems}onClick={ () => numberButtonHandler(lastPage)}>{lastPage + 1}</span> : null}     
      
      <button onClick={nextbuttonHandler}>Siguiente</button>
      
      </div> : null}
    </div>
  )
}