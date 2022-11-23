import { nextButton, firstElement, nextPage, setPage, prevButton } from "../../../redux/actions"


export function nextbuttonHandler (currentIndex, maxLength, numberOfPages, dispatch){

  if(currentIndex >= maxLength) return

  dispatch(nextButton())
  dispatch(firstElement(numberOfPages))
  dispatch(nextPage(numberOfPages))
  
}

export function numberButtonHandler (page, numberOfPages, dispatch){
  if(page === 0) numberOfPages = 9
  dispatch(setPage(page));
  dispatch(firstElement(numberOfPages));
  dispatch(nextPage(numberOfPages));

}

export function prevButtonHandler (actualPage, numberOfPages, dispatch) {

  if(actualPage < 1) return

  if(actualPage === 1) numberOfPages = 9;

  dispatch(prevButton())
  dispatch(firstElement(numberOfPages))
  dispatch(nextPage(numberOfPages))

}