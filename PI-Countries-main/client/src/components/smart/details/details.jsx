
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchCountryByID} from "../../../redux/actions";
import CountryDetails from "../../dumb/countryDetails/countryDetails";


export default function Details (props){

  const params = useParams()

  const dispatch = useDispatch();

  const countryInfo = useSelector( state => state.country)

  useEffect( () => {
    dispatch(searchCountryByID(params.id))
  })

  return (
    <>
      <CountryDetails props={countryInfo} />
    </>
  )
}