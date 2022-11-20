
import { addCountries, orderBy, resetPag} from "../../../redux/actions";

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


  //NO LO ESTOY USANDO
  export function changeContinentHandler (e, set) {
    set(e.target.value)
  }
  //TAMPOCO
  export function changeActivityHandler (e, set) {
    set( prev => {
      return {
        ...prev,
        activitySelected: e.target.value
      }
    })
  }

  export function filtersButton (type, countries, order, dispatch){
    newCountries = countries.map(element => element.name).join();
    dispatch(orderBy(type, order, newCountries));
    dispatch(resetPag());
  }

  export function orderContinent (sort, countries, setContinentSort, dispatch){

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
    dispatch(addCountries(newCountries))
    dispatch(resetPag());
    setContinentSort(sort === "DESC" ? "ASC" : "DESC");
  }