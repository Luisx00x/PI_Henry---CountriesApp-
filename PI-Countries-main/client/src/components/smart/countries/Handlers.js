
export const selectHandler = (e, countries, addFunction, setState, reset) => {
  let newCountries = countries.filter( element => element.continent === e.target.value)
  addFunction(newCountries)
  setState( prev => {
    return {
      ...prev,
      continentSelect : true
    }
  })
  reset();
}

export function activitiesHandler(e, order, set, reset){
  order("activities", "undefined", e.target.value);
  reset()
}

export function selectsReset (add, set, countries) {
  add(countries)
  set( prev => {
    return {
      ...prev,
      continentSelect: false,
    }
  })
  }