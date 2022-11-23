import React from 'react';
import Country from '../../dumb/country/country.jsx';
import {connect} from 'react-redux';
import { init, nextButton, prevButton} from '../../../redux/actions';

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

      { !this.props.query.search ? <ButtonBar></ButtonBar> : null }
      
        <div className={s.countries}>

          { 
            !this.props.loading ? 

            ( typeof this.props.countries !== "string" ? 
            this.props.countries
            .slice(this.props.firstElement , this.props.nextPage)
            .map( ele => {
              return <Country name={ele.name} 
              flag={ele.flag} 
              continent={ele.continent} 
              id={ele.ID} 
              population={ele.population} 
              key={ele.ID}/>
            } ) : 
            
            <p>{this.props.countries}</p>) : 
            <img className={s.loading} src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" 
            alt="loading" />
            
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
    firstElement: state.firstElement,
    nextPage: state.nextPage,
    continentSort: state.continentSort
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
    }
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Countries)