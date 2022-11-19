
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchCountryByID, init } from "../../../redux/actions";
import CountryDetails from "../../dumb/countryDetails/countryDetails";


export default function Details (props){

  const params = useParams()

  const dispatch = useDispatch();

  const countryInfo = useSelector( state => state.country)

  useEffect( () => {
    dispatch(searchCountryByID(params.id))
  }, [])

  console.log(countryInfo.Activities)
  console.log(typeof countryInfo.Activities)

  //SOLUCION: hacer otro estado (global o local) donde se almacene el resultado de la busqueda para renderizar

  return (
    <>
      <CountryDetails props={countryInfo} />
    </>
  )
}