
const initialState = {
  countries: [],
  loading: false,
  actualPage: 0,
  search: ""
}

export default function reducer(state = initialState, action){
    switch(action.type){

      case "ADD_COUNTRIES":
        return {
          ...state,
          loading: false,
          countries: action.payload
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

      default: 
          return {...state}
    }
}