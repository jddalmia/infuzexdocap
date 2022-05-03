import React from 'react'
import {useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch , useSelector} from 'react-redux';
import Loader from '../component/loader';

import { GetAllDoctorAction } from '../actions/doctoraction';
import { GetAllDoctorReducer } from '../reducers/doctorreducer';
import './admin.css'

const AllDrList=()=>{

    const getallusers = useSelector(state=> state.GetAllDoctorReducer )

    const {doctors , loading , error} = getallusers

    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(GetAllDoctorAction())
    } , [] )



    return(
        <div>
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
                   <th>Created At</th>
                   <th>Edit</th>
                   
                  
                   
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
                           <td> { use.status?(<p>Approved</p>): <p>Not Approved</p> } </td>
                           <td>{use.createdAt.substr(0,10)}</td>
                           <td> <Link to={`/admin/dredit/${use._id}`} >
                           <td  > <i class="fas fa-edit"></i> </td>
                           </Link></td>
                          
                          


                           </tr>
                   }) ) }
               </tbody>
           </table>
        </div>
    )

}

export default AllDrList