import React , {useState, useEffect} from 'react'
import {Link , useParams } from 'react-router-dom'
import Rating from 'react-rating'

import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetDoctorById } from '../actions/doctoraction';
import { GetDoctorByIdReducer } from '../reducers/doctorreducer';
import Loader from "../component/loader";

import ReviewComponent from '../component/review';
import { map } from 'jquery';



const GetDoctorByIdComponent = ( {docid} )=>{






    return(
        <div>
       
       Dr {docid}


        </div>
    )


}

export default GetDoctorByIdComponent;