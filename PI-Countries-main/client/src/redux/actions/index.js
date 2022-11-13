
export function init (){
  return function(dispatch){
    dispatch(loading());
    return fetch('http://localhost:3001/countries')
    .then( res => res.json())
  //  .then( res => console.log(res))
    .then( res => {
      dispatch(addCountries(res))
      dispatch(fillAll(res))
    })
    /* .then( res => dispatch(fetchFromApi(res)))
    .then( res => dispatch(addCountries(res.payload[0])))   */   //Este dispath agrega los paises a countries
    .catch( error => console.log(error))
  }
}

export function fillAll(payload){
  return {
    type: "FILL_ALL",
    payload
  }
}

export function orderBy(filter, order, country){

  return function (dispatch){
    dispatch(loading());
    fetch(`http://localhost:3001/countries?filter=${filter}&type=${order}&country=${country}`)
    .then( res => res.json())
    .then( res => dispatch(addCountries(res)))
    .catch( error => console.log(error))
    if(filter === "population")dispatch(populationSort());
    if(filter === "name") dispatch(namesSort());
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

export function firstElement(payload){
  return {
    type: "FIRST_ELEMENT",
    payload
  }
}

export function nextPage(payload){
  return {
    type: "NEXT_PAGE",
    payload
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

export function resetPag(){
  return {
    type: "RESET_PAG"
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

export function populationSort(){
  return {
    type: "POPULATION_SWITCH"
  }
}

export function namesSort(){
  return {
    type: "NAMES_SWITCH"
  }
}