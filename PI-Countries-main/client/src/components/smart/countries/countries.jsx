import React from 'react';
import Country from '../../dumb/country/country.jsx';
import {connect} from 'react-redux';
import { init, nextButton, populationSort, prevButton, orderBy, addCountries, resetPag} from '../../../redux/actions';
import { selectHandler } from './Handlers.js';

import s from './countries.module.css';
import Pagination from '../pagination/pagination.jsx';

class Countries extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      continentSort: "DESC",
      continentSelect: false
    }
  }
  
  componentDidMount(){                        //Esta funcion la tengo que manejar asincronamente con un dispatch
    this.props.getCountries();
  }

  componentDidUpdate(){
    console.log(this.props.countries, "ACTUALIZO")
  }

  render(){

    /* let numberOfPages;

    (this.props.actualPage === 0) ? numberOfPages = 9 : numberOfPages = 10

    let firstElement = this.props.actualPage * numberOfPages;
    
    let nextPage = firstElement + numberOfPages; */

    return (
      <div>

      {/* Paginacion */}

      <Pagination prev={this.props.prev} next={this.props.next}></Pagination>

     {/*  <div className={s.pagination}>

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
      </div> */}
      
      {/*  */}

      {/* Botones de ordenamiento */}

      <div>
        {/* <button onClick={this.props.ascendOption}>ascendente</button> */}
        {/* Podria usar handles */}

        {/* //? BOTON ADICIONAL */}
        {this.state.continentSelect ? null : <button onClick={ () => {
          if(this.state.continentSort === "DESC"){
            this.props.countries.sort( (a,b) => {
              if(a.continent > b.continent) return 1
              if(a.continent < b.continent) return -1
              else return 0
            })
          }
            if(this.state.continentSort === "ASC"){
            this.props.countries.sort( (a,b) => {
              if(a.continent > b.continent) return -1
              if(a.continent < b.continent) return 1
              else return 0
            })
          }
          this.setState( prev =>{
            console.log("PREV", prev)
            return {
              ...prev,
              continentSort: prev.continentSort === "DESC" ? "ASC" : "DESC"
            }
          })
          console.log("LOCAL STATE", this.state.continentSort)
        }}>Ordenar por contienente</button>}
        {/* //FIN DE BOTON ADICIONAL */}

        {/* HANDLER */}
        {/* {selectHandler = (e) => {
          let newCountries = this.props.countries.filter( element => element.continent === e.target.value)
          this.props.add(newCountries)
        }} */}

        <select>
          <option value="all" onClick={() => {
            this.props.add(this.props.allCountries)
            this.setState( prev => {
              return {
                ...prev,
                continentSelect: false
              }
            })
            }}>Mostrar todos</option>
          
          <option value ="Americas" onClick={(e) => {
            selectHandler(e, this.props.allCountries, this.props.add, this.setState.bind(this))
            }}>Americas</option>

          <option value ="Europe" onClick={(e) => {
            selectHandler(e, this.props.allCountries, this.props.add, this.setState.bind(this))
            }}>Europe</option>
            
          <option value ="Oceania" onClick={(e) => {
            selectHandler(e, this.props.allCountries, this.props.add, this.setState.bind(this))           
            }}>Oceania</option>

          <option value ="Africa" onClick={(e) => {
            selectHandler(e, this.props.allCountries, this.props.add, this.setState.bind(this))
            }}>Africa</option>
          
          <option value ="Asia" onClick={(e) => {
            selectHandler(e, this.props.allCountries, this.props.add, this.setState.bind(this))
            }}>Asia</option>
          
          <option value ="Antarctic" onClick={(e) => {
            selectHandler(e, this.props.allCountries, this.props.add, this.setState.bind(this))
            }}>Antartic</option>
        </select>

        <button onClick={this.props.descendOption}>descendente</button>

        {this.props.search.length > 0 ? <button onClick={() =>{
          let newCountries = this.props.countries.map( element => element.name).join();
          this.props.order("name", this.props.names, newCountries)
        }}>Alfabetico search</button> : 
        <button onClick={ () => this.props.order("name",this.props.names)}>alfabetico all</button>}

        {this.props.search.length>0 ? <button onClick={() =>{
          let newCountries = this.props.countries.map( element => element.name).join()
          this.props.order("population",this.props.population, newCountries)
          this.props.reset();
        }}>poblacion search</button> : 
        <button onClick={() => {
          this.props.order("population",this.props.population)
          this.props.reset()
          } }>poblacion all</button>}
      </div>
      
        <div className={s.countries}>
          {console.log(this.props.actualPage, "actualPage")}
          {console.log(this.props.countries, "countries")}
          {console.log(this.props.population)}
          {console.log(this.props.dataFromApi)}   {/* Sacar esta prop luego, solo para pruebas */}

        {/* Descendente */}
          {
            /* !this.props.length >= 0 && this.props.descend === true ? console.log(this.props.countries.sort( (a,b) => {
              if(a.name > b.name) return 1
              if(a.name < b.name) return -1
              return 0
            } ), "sort") : null */
          }

        {/* Ascendente */}
          {
            /* !this.props.length >= 0 && this.props.ascend === true ? console.log(this.props.countries.sort( (a,b) => {
              if(a.name > b.name) return -1
              if(a.name < b.name) return 1
              return 0
            } ), "sort") : null */
          }

          {console.log(this.props.firstElement, "ELEMENTO INICIAL DE CONTEO")}
          {console.log(this.props.countries.slice(this.props.firstElement, this.props.nextPage), "Sslice")}
          {console.log(this.props.firstElement, "FistElement")}
          {console.log(this.props.nextPage, "Next pag")}

          { 
            !this.props.loading ? ( typeof this.props.countries !== "string" ? this.props.countries.slice(this.props.firstElement , this.props.nextPage).map( ele => {
              return <Country name={ele.name} flag={ele.flag} continent={ele.continent} id={ele.ID} population={ele.population} key={ele.ID}/>
            }) : <p>{this.props.countries}</p>) : <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="loading" />
            
          }
        </div> 
      </div>
    );
  }
}

function mapStatesToProps(state){
  return{
    allCountries: state.allCountries,
    countries: state.countries,
    loading: state.loading,
    actualPage: state.actualPage,    //Solo para probar
    ascend: state.ascend,
    descend: state.descend,
    population: state.population,
    search: state.search,
    names: state.names,
    firstElement: state.firstElement,
    nextPage: state.nextPage
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
    populOption: function (){
      dispatch(populationSort())
    },
    order: function(filter, order, country){
      dispatch(orderBy(filter, order, country))
    },
    add: function(data){
      dispatch(addCountries(data))
    },
    reset: function(){
      dispatch(resetPag())
    }
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Countries)