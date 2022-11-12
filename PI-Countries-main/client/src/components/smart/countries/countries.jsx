import React from 'react';
import Country from '../../dumb/country/country.jsx';
import {connect} from 'react-redux';
import {ascendSort, descendSort, init, nextButton, populationSort, prevButton} from '../../../redux/actions';

import s from './countries.module.css';

class Countries extends React.Component{
  
  componentDidMount(){                        //Esta funcion la tengo que manejar asincronamente con un dispatch
    this.props.getCountries()
  }

  render(){

    return (
      <div>

      {/* Paginacion */}

      <div className={s.pagination}>

      <button onClick={this.props.prev}>Anterior</button>
      {this.props.actualPage < 9 ?
      <p> {this.props.actualPage},
          {this.props.actualPage + 1},
          {this.props.actualPage + 2},
          {this.props.actualPage + 3},
          ..., Aqui va la ultima pag </p> :

        <p> ...,
            {this.props.actualPage - 1},
            {this.props.actualPage - 2},
            {this.props.actualPage - 3}
        </p>
      }
        
      <button onClick={this.props.next}>Siguiente</button>
      </div>
      
      {/*  */}

      {/* Botones de ordenamiento */}

      <div>
        <button onClick={this.props.ascendOption}>ascendente</button>
        <button onClick={this.props.descendOption}>descendente</button>
        <button onClick={this.props.populOption}>poblacion</button>
      </div>
      
        <div className={s.countries}>
          {console.log(this.props.actualPage, "actualPage")}
          {console.log(this.props.countries, "countries")}
          {console.log(this.props.population)}

        {/* Descendente */}
          {
            !this.props.length >= 0 && this.props.descend === true ? console.log(this.props.countries.sort( (a,b) => {
              if(a.name > b.name) return 1
              if(a.name < b.name) return -1
              return 0
            } ), "sort") : null
          }

        {/* Ascendente */}
          {
            !this.props.length >= 0 && this.props.ascend === true ? console.log(this.props.countries.sort( (a,b) => {
              if(a.name > b.name) return -1
              if(a.name < b.name) return 1
              return 0
            } ), "sort") : null
          }

          { 
            !this.props.loading ? ( typeof this.props.countries !== "string" ? this.props.countries.map( ele => {
              return <Country name={ele.name} flag={ele.flag} continent={ele.continent} id={ele.ID} key={ele.ID}/>
            }) : <p>{this.props.countries}</p>) : <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="loading" />
            
          }
        </div> 
      </div>
    );
  }
}

function mapStatesToProps(state){
  return{
    countries: state.countries,
    loading: state.loading,
    actualPage: state.actualPage,    //Solo para probar
    ascend: state.ascend,
    descend: state.descend,
    population: state.population
  }
}

function mapDispatchToProps(dispatch){
  return {
    getCountries: function (){
      dispatch(init());
    },
    next: function (){
      dispatch(nextButton());
    },
    prev: function (){
      dispatch(prevButton());
    },
    ascendOption: function (){
      dispatch(ascendSort())
    },
    descendOption: function (){
      dispatch(descendSort())
    },
    populOption: function (){
      dispatch(populationSort())
    }
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Countries)