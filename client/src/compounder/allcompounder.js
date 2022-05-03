import React , {useState, useEffect} from 'react'
import {Link , useParams } from 'react-router-dom'
import Rating from 'react-rating'
import { GetCompounderById } from '../actions/compounderaction'
import { GetCompounderByIdReducer } from '../reducers/compounderreducer'
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import './comp.css'
import Loader from '../component/loader'
import { DeleteCompounderAction } from '../actions/compounderaction'

const GetCompounder=({docid})=>{

    const dispatch = useDispatch()

    const dridstate = useSelector(state=>state.GetCompounderByIdReducer)
    const { loading, compounders ,error} = dridstate

    

    useEffect(() => {
        dispatch(GetCompounderById( {docid} ))

    }, [])

  


    return(
        <div>

<table className='table' id="customers"  >
               <thead>
                   <tr>
                   <th>User Id</th>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Contact Number</th>
                   <th>Delete</th>
                   
                   
                  
                   
                       </tr>
                
               </thead>

               <tbody>
                   {loading && (<Loader/>) }
                   
                   {compounders && ( compounders.map(use=>{
                       return <tr>

                           <td> {use._id} </td>
                           <td> {use.name} </td>
                           <td> {use.email} </td>
                           <td> { use.contactnumber } </td>
                             <td> <i id="del" className="far fa-trash-alt" onClick={ ()=>{ dispatch(DeleteCompounderAction(use._id)) } }  ></i> 
                          </td>
                          
                          


                           </tr>
                   }) ) }
               </tbody>
           </table>
    
    </div>

   





       
    )



}

export default GetCompounder;