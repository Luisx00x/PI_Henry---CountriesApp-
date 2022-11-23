
const initialState = {
  allCountries: [],
  countries: [],
  country: [],
  loading: false,
  actualPage: 0,
  firstElement: 0,
  nextPage: 9,
  activities: [],
  continentSort: "DESC"
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
          allCountries: action.payload
        }

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
          firstElement: state.actualPage === 0 ? 0 : ( state.actualPage * action.payload) - 1
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

       case "ACTIVITIES_FILTER":
        return {
          ...state,
          activities: action.payload
        }

      case "CONTINENT_SWITCH":
        return {
          ...state,
          continentSort: state.continentSort === "DESC" ? "ASC" : "DESC"
        }

      default: 
          return {...state}
    }
}