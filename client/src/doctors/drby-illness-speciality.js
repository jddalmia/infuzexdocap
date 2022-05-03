import React , {useEffect, useState} from "react";
import { FilterProducts2 } from "../actions/doctoraction";
import {useDispatch , useSelector  } from 'react-redux'

import { fontAwesome, search } from "fontawesome";

const DoctorByIllnessSpeciality=({doc})=>{

    const [searchkey , setsearchkey] = useState(doc)
    const dispatch=useDispatch()
    
    const searchas=()=>{
        dispatch(FilterProducts2(searchkey))
    }

    // useEffect(
    //     ()=>{
    //         dispatch(FilterProducts2(searchkey))
    //     }
    // )
  

    return(
        <div onClick={ ()=>{ dispatch(FilterProducts2(searchkey)) } } > Hi

{doc}


{console.log(doc)}



        </div>
    )


}
export default DoctorByIllnessSpeciality;