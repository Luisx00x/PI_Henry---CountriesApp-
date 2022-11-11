import React from 'react';
import Country from '../../dumb/country/country.jsx';
import {connect} from 'react-redux';
import {init, nextButton, prevButton} from '../../../redux/actions';

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
      
        <div className={s.countries}>
          {console.log(this.props.actualPage)}
          {
            !this.props.loading ? this.props.countries.map( ele => {
              return <Country name={ele.name} flag={ele.flag} continent={ele.continent} key={ele.ID}/>
            }) : <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="loading" />
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
    actualPage: state.actualPage    //Solo para probar
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