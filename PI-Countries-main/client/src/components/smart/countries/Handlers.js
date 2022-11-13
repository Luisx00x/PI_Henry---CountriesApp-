
const selectHandler = (e, countries, addFunction, setState) => {
  let newCountries = countries.filter( element => element.continent === e.target.value)
  addFunction(newCountries)
  setState( prev => {
    return {
      ...prev,
      continentSelect : true
    }
  })
}

module.exports = {
  selectHandler
}