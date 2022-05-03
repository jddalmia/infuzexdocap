import React from 'react'
import {useEffect , useState} from 'react';

import {useDispatch , useSelector} from 'react-redux';
import Loader from '../component/loader';

import { GetAllDoctorReqAction } from '../actions/doctoraction';
import { GetAllReqDoctorReducer } from '../reducers/doctorreducer';
import { ApproveDr } from '../actions/doctoraction';
import { Link } from 'react-router-dom';


const  DrReq=()=>{

    const [val,setval]=useState('')

   var value=true

    const getallusers = useSelector(state=> state.GetAllReqDoctorReducer )

    const {doctors , loading , error} = getallusers

    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(GetAllDoctorReqAction())
    } , [] )



    return(
        <div>
This is Request Screen

<table className='table' id="customers"  >
               <thead>
                   <tr>
                   <th>User Id</th>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Contact Number</th>
                   <th>Fees</th>
                   <th>Specilization</th>
                   <th>Address</th>
                   <th>Approved Status</th>
                   <th>Show More</th>
                   
                  
                   
                       </tr>
                
               </thead>

               <tbody>
                   {loading && (<Loader/>) }
                   
                   {doctors && ( doctors.map(use=>{
                       return <tr>
                           
                           <td> {use._id} </td>
                           <td> {use.name} </td>
                           <td> {use.email} </td>
                           <td> { use.contactnumber } </td>
                           <td> { use.fees } </td>
                           <td> { use.field } </td>
                           <td> { use.address } </td>
                           <td> {use.status ? <p>Not Approved</p> : <p> Approved</p> } </td>
                           <Link to={`/admin/doctorapprove/${use._id}`} >
                           <td  > <i class="fa fa-list" aria-hidden="true"></i> </td>
                           </Link>
                          


                           </tr>
                   }) ) }
               </tbody>
           </table>



        </div>
    )

}

export default DrReq