import { addCountries as add, resetPag as reset } from "../../../redux/actions";

export function orderContinent (sort, countries, setContinentSort) {
  let newCountries;

  if(sort === "DESC"){
    newCountries = countries.sort( (a,b) => {
      if(a.continent > b.continent) return 1
      if(a.continent < b.continent) return -1
      else return 0
    })
  }
    if(sort === "ASC"){
    newCountries = countries.sort( (a,b) => {
      if(a.continent > b.continent) return -1
      if(a.continent < b.continent) return 1
      else return 0
    })
  }
  add(newCountries);
  reset();
  setContinentSort(sort === "DESC" ? "ASC" : "DESC");

}
