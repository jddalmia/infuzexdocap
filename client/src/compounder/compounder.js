import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import Loader from "../component/loader";
import { GetDoctorById } from "../actions/doctoraction";
import { GetDoctorByIdReducer } from "../reducers/doctorreducer";
import GetDoctorByIdComponent from "./getdocbyid";

const Compounder=()=>{

    const compounder = JSON.parse(localStorage.getItem('compounder'))

    const dridstate = useSelector(state=>state.GetDoctorByIdReducer)
    const { loading, doctors ,error} = dridstate

    const currentuser = JSON.parse(localStorage.getItem('currentuser'))

   


 
    var doc 
    const dispatch = useDispatch()

   // dispatch(GetDoctorById(compounder.docid))

  

    console.log('doctors' , doctors )

    return(
        <div>

            { doc = compounder.docid }

Compounder Page  {compounder.name} .




<GetDoctorByIdComponent docid={compounder.docid} />


        </div>
    )



}

export default Compounder