
import { addCountries, continentSort, orderBy, resetPag} from "../../../redux/actions";

let newCountries;

export const selectHandler = (e, countries, set, dispatch) => {
  newCountries = countries.filter( element => element.continent === e.target.value)
  dispatch(addCountries(newCountries));
  set(true);
  dispatch(resetPag());
}

export function activitiesHandler(e, set, dispatch){
  dispatch(orderBy("activities", "undefined", e.target.value));
  set(false);
  dispatch(resetPag());
}

export function selectsReset (set, countries, dispatch) {
  dispatch(addCountries(countries));
  set(false)
  }

  export function filtersButton (type, countries, order, allCountries, dispatch){
    if(countries < allCountries ) newCountries = countries.map(element => element.name).join();
    else newCountries = undefined
    dispatch(orderBy(type, order, newCountries));
    dispatch(resetPag());
  }

  export function orderContinent (sort, countries, dispatch){

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
    dispatch(addCountries(newCountries));
    dispatch(continentSort());
    dispatch(resetPag());
  }