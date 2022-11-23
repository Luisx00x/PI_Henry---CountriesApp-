
export function init (){
  return function(dispatch){
    dispatch(loading());
    return fetch('http://localhost:3001/countries')
    .then( res => res.json())
    .then( res => {
      dispatch(addCountries(res.findData))
      dispatch(fillAll(res.findAllCountries))
      dispatch(activitiesFilter(res.options.map(element => element)))
    })
    .catch( error => alert(error))
  }
}

export function fillAll(payload){
  return {
    type: "FILL_ALL",
    payload
  }
}

export function orderBy(filter, order, value){

  return function (dispatch){
    dispatch(loading());
    const callAPI = fetch(`http://localhost:3001/countries?filter=${filter}&type=${order}&value=${value}`)
    
    if(filter === "population" || filter === "name"){
      callAPI.then( res => res.json())
      .then( res => dispatch(addCountries(res)))
      .catch( error => alert(error.message))
    }

    if(filter === "activities") {
      callAPI.then( res => res.json())
      .then( res => dispatch(addCountries(res[0].countries)))
      .catch(error => alert(error))
    }
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

export function setPage(payload){
  return {
    type: "SET_PAGE",
    payload
  }
}

export function resetPag(){
  return {
    type: "RESET_PAG"
  }
}

export function searchID(data){
  return function (dispatch){
    dispatch(loading()); 
    fetch(`http://localhost:3001/home${data}`)  
    .then( res => res.json())
    .then( res => dispatch(addCountries(res)))     
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

export function continentSort (){
  return {
    type: "CONTINENT_SWITCH"
  }  
}

export function activitiesFilter (payload){
  return {
    type: "ACTIVITIES_FILTER",
    payload
  }
}