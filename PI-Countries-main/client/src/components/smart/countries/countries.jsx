import React from 'react';
import Country from '../../dumb/country/country.jsx';
import {connect} from 'react-redux';
import { init, nextButton, populationSort, prevButton, orderBy, addCountries, resetPag} from '../../../redux/actions';
import { selectHandler, activitiesHandler, selectsReset } from './Handlers.js';

import s from './countries.module.css';
import Pagination from '../pagination/pagination.jsx';

class Countries extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      continentSort: "DESC",
      continentSelect: false,     //Para el boton adicional
      selected: "all",             //Maneja el select
      activitySelected: "none"
    }
  }

  //! Handler del select

  changeContinentHandler = (e) =>{
    this.setState( prev => {
      return {
        ...prev,
        selected: e.target.value
      }
    })
  }

  changeActivityHandler = (e) =>{
    this.setState( prev => {
      return {
        ...prev,
        activitySelected: e.target.value
      }
    })
  }
  
  componentDidMount(){                        //Esta funcion la tengo que manejar asincronamente con un dispatch
    this.props.getCountries();
  }

  render(){

    //!HANDLER BOTON ADICIONAL
    function optionalButtonHandler (setState){
      setState( prev =>{
        return {
          ...prev,
          continentSelect: false
        }
      })
    }

  console.log(this.props.countries)

  console.log(this.state, "ESTADO")

    return (
      <div>

      <Pagination prev={this.props.prev} next={this.props.next}></Pagination>

     {/*  <div className={s.pagination}>

      {/* Botones de ordenamiento */}

      <div>

        {this.props.activities.length > 0 ? 
        <select value={this.state.activitySelected} onChange={this.changeActivityHandler}>
          <option
          onClick={ () => selectsReset(this.props.add, this.setState.bind(this), this.props.allCountries) } 
          value="none">-- Seleccione una actividad --</option>
          {this.props.activities ? this.props.activities.map( element => {
            return <option 
            key={element} 
            value={element}
            onClick={(e) => {
              activitiesHandler(e, this.props.order, this.setState.bind(this), this.props.reset)
            }}>{element}</option>
          }) : null}
        </select> : null}

        {console.log(this.state.activitySelected)}

        {/* <button onClick={() => this.props.order("activities", this.props.activities, "Senderismo")}>Ordenar por</button> */}

        {/* //? BOTON ADICIONAL // CUANDO SELECTED !== ALL DEBE CAMBIAR POR UN BOTON PARA MOSTRAR TODOS LOS PAISES*/}
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

        {/* //TODO ACOMODAR LAS OPTIONS EL SELECT */}
        <select id="select" value={this.state.selected} onChange={this.changeContinentHandler} >
          <option value="all" onClick={() => selectsReset(this.props.add, this.setState.bind(this), this.props.allCountries)}>Mostrar todos</option>
          
          {/* HAcer una arreglo con el nombre de los paises y mapear las opciones */}
          <option value ="Americas" onClick={(e) => {
            selectHandler(e, this.props.allCountries, this.props.add, this.setState.bind(this), this.props.reset)
            }}>Americas</option>

          <option value ="Europe" onClick={(e) => {
            selectHandler(e, this.props.allCountries, this.props.add, this.setState.bind(this), this.props.reset)
            }}>Europe</option>
            
          <option value ="Oceania" onClick={(e) => {
            selectHandler(e, this.props.allCountries, this.props.add, this.setState.bind(this), this.props.reset)           
            }}>Oceania</option>

          <option value ="Africa" onClick={(e) => {
            selectHandler(e, this.props.allCountries, this.props.add, this.setState.bind(this), this.props.reset)
            }}>Africa</option>
          
          <option value ="Asia" onClick={(e) => {
            selectHandler(e, this.props.allCountries, this.props.add, this.setState.bind(this), this.props.reset)
            }}>Asia</option>
          
          <option value ="Antarctic" onClick={(e) => {
            selectHandler(e, this.props.allCountries, this.props.add, this.setState.bind(this), this.props.reset)
            }}>Antartic</option>
        </select>

          {/* //TODO simplificacion del handler: hacer solo 1 boton y meter el map en un condicional: si this.props.search.length MAY 0, hacer el map, sino sigue */}
       
        {/* //!COPIA DEL BOTON */}
        {/* {this.props.search.length > 0 ? <button onClick={() =>{
          let newCountries = this.props.countries.map( element => element.name).join();
          this.props.order("name", this.props.names, newCountries)
          this.props.reset();
        }}>Alfabetico search</button> : 
        <button onClick={ () => {
          this.props.order("name",this.props.names)
          this.props.reset();
          this.setState( prev => {
            return {
              ...prev,
              selected: "all"
            }
          })
          optionalButtonHandler(this.setState.bind(this));
          } }>alfabetico all</button>}   */}

        {<button onClick={() =>{
          //TODO PODRIA QUITAR EL ELSE, no esta entrando
            let newCountries = this.props.countries.map( element => element.name).join();
            this.props.order("name", this.props.names, newCountries)
            this.props.reset();
          //  optionalButtonHandler(this.setState.bind(this))
        }}>Alfabetico search</button>}

        {/* {this.props.search.length>0 ? <button onClick={() =>{
          let newCountries = this.props.countries.map( element => element.name).join()
          this.props.order("population",this.props.population, newCountries)
          this.props.reset();
        }}>poblacion search</button> : 
        <button onClick={() => {
          this.props.order("population",this.props.population)
          this.props.reset()
          this.setState( prev => {
            return {
              ...prev,
              selected: "all"
            }
          })
          optionalButtonHandler(this.setState.bind(this))
          } }>poblacion all</button>} */}

          {<button onClick={() =>{
            let newCountries;
            if(this.props.countries.length < this.props.allCountries.length){
              newCountries = this.props.countries.map( element => element.name).join()
            }else{
              newCountries = "undefined"
            }
          this.props.order("population",this.props.population, newCountries)
          this.props.reset();
          //optionalButtonHandler(this.setState.bind(this))
        }}>poblacion search</button>}
      </div>
      
        <div className={s.countries}>

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
    actualPage: state.actualPage,    //Solo para probar
    loading: state.loading,
    population: state.population,
    search: state.search,
    names: state.names,
    firstElement: state.firstElement,
    nextPage: state.nextPage,
    activities: state.activities
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