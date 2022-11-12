
export function init (){
  return function(dispatch){
    dispatch(loading());
    return fetch('http://localhost:3001/countries')
    .then( res => res.json())
  //  .then( res => console.log(res))
    .then( res => dispatch(addCountries(res)))
    .catch( error => console.log(error))
  }
}

export function addCountries(payload){
  return {
    type: "ADD_COUNTRIES",
    payload
  }
}

export function loading (){
  return {
    type: "LOADING"
  }
}

export function nextButton(){
  return {
    type: "NEXT"
  }
}

export function prevButton(){
  return {
    type: "PREV"
  }
}

export function search(payload){
  return {
    type: "SEARCH_INPUT", 
    payload
  }
}

//ESTOS LLAMADOS ASINCRONOS NO USAN UN TYPE PORQUE USAN EL DE OTRA ACTION
export function searchID(data){
  return function (dispatch){
    dispatch(loading()); 
    fetch(`http://localhost:3001/countries?name=${data}`)  
    .then( res => res.json())
  //  .then( res => console.log(res))
    .then( res => dispatch(addCountries(res)))        // <===== AQUI
    .catch( error => console.log(error))
  }
}

export function searchCountryByID(data){
  return function(dispatch){
    dispatch(loading());
    fetch(`http://localhost:3001/countries/${data}`)
    .then( res => res.json())
    .then( res => dispatch(addCountry(res)))
    .catch( error => console.log(error))
  }
}

export function addCountry(payload){
  return {
    type: "ADD_COUNTRY",
    payload
  }
}

export function ascendSort(){
  return {
    type: "ASCEND_SWITCH"
  }
}

export function descendSort(){
  return {
    type: "DESCEND_SWITCH"
  }
}

export function populationSort(){
  return {
    type: "POPULATION_SWITCH"
  }
}