
const initialState = {
  allCountries: [],
  countries: [],
  country: [],
  loading: false,
  actualPage: 0,
  search: "",
  names: "ASC",
  firstElement: 0,
  nextPage: 9,
  population: "DESC",
  activities: []
}

export default function reducer(state = initialState, action){
    
    switch(action.type){

      case "ADD_COUNTRIES":
        return {
          ...state,
          loading: false,
          countries: action.payload
        }

      case "FILL_ALL":
        return {
          ...state,
          loading: false,
          countries: action.payload,
          allCountries: action.payload
        }

        /* case "FILL_ALL":
          return {
            ...state,
            allCountries: action.payload
          } */

      case "ADD_COUNTRY":
        return {
            ...state,
            loading: false,
            country: action.payload
        }

      case "LOADING":
        return {
          ...state,
          loading: true
        }

      case "NEXT_PAGE":
        return {
          ...state,
          nextPage: state.firstElement + action.payload
        }

      case "FIRST_ELEMENT":
        return {
          ...state,
          firstElement: state.actualPage * action.payload
        }
        
        case "NEXT":
          return {
            ...state,
            actualPage: state.actualPage + 1
        }
      
      case "PREV":
        return {
          ...state,
          actualPage: state.actualPage - 1
        }

      case "SET_PAGE":
        return {
          ...state,
          actualPage: action.payload
        }

      case "RESET_PAG":
        return {
          ...state,
          actualPage: 0,
          firstElement: 0,
          nextPage: 9
        }
      
      case "SEARCH_INPUT":
        return {
          ...state,
          search: action.payload
        }

       case "ACTIVITIES_FILTER":
        return {
          ...state,
          activities: action.payload
        }
         
      case "NAMES_SWITCH":
        return {
          ...state,
          names: state.names === "DESC" ? "ASC" : "DESC"
        }
        
      case "POPULATION_SWITCH":
        return {
          ...state,
          population: state.population === "DESC" ? "ASC" : "DESC"
        }

      default: 
          return {...state}
    }
}