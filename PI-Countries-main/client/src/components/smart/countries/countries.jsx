import React from 'react';
import Country from '../../dumb/country/country.jsx';
import {connect} from 'react-redux';
import { init, nextButton, populationSort, prevButton, orderBy, addCountries, resetPag} from '../../../redux/actions';

import s from './countries.module.css';
import Pagination from '../pagination/pagination.jsx';
import ButtonBar from '../buttonBar/buttonBar.jsx';

class Countries extends React.Component{
  
  componentDidMount(){                       
    this.props.getCountries();
  }

  render(){

    return (
      <div>

      <Pagination prev={this.props.prev} next={this.props.next}></Pagination>

      <ButtonBar></ButtonBar>
      
        <div className={s.countries}>

          { 
            !this.props.loading ? ( typeof this.props.countries !== "string" ? this.props.countries.slice(this.props.firstElement , this.props.nextPage).map( ele => {
              return <Country name={ele.name} flag={ele.flag} continent={ele.continent} id={ele.ID} population={ele.population} key={ele.ID}/>
            }) : <p>{this.props.countries}</p>) : <img className={s.loading} src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading" />
            
          }
          
        </div> 
      </div>
    );
  }
}

function mapStatesToProps(state){
  return{
   // allCountries: state.allCountries,
    countries: state.countries,
   // actualPage: state.actualPage,    
    loading: state.loading,
   // population: state.population,
   // search: state.search,
   // names: state.names,
    firstElement: state.firstElement,
    nextPage: state.nextPage,
    continentSort: state.continentSort
   // activities: state.activities
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
    /* populOption: function (){
      dispatch(populationSort())
    }, */
    /* order: function(filter, order, country){
      dispatch(orderBy(filter, order, country))
    }, */
    /* add: function(data){
      dispatch(addCountries(data))
    }, */
    /* reset: function(){
      dispatch(resetPag())
    } */
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Countries)