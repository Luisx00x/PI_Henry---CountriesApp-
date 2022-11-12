
const initialState = {
  countries: [],
  country: [],
  loading: false,
  actualPage: 0,
  search: "",
  ascend: false,
  descend: false,
  population: false,
}

export default function reducer(state = initialState, action){
    switch(action.type){

      case "ADD_COUNTRIES":
        return {
          ...state,
          loading: false,
          countries: action.payload
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
      
      case "SEARCH_INPUT":
        return {
          ...state,
          search: action.payload
        }

      case "ASCEND_SWITCH":
        return {
          ...state,
          ascend: true,
          descend: false
        }

      case "DESCEND_SWITCH":
        return {
          ...state,
          descend: true,
          ascend: false
        }
      
      case "POPULATION_SWITCH":
        return {
          ...state,
          population: state.population ? false : true
        }

      default: 
          return {...state}
    }
}