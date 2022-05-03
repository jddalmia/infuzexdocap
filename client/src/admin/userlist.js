import React from 'react'
import {useEffect , useState} from 'react';

import {useDispatch , useSelector} from 'react-redux';

import { GetAllUserAction } from '../actions/useraction';
import Loader from '../component/loader';
import { GetAllUserReducer } from '../reducers/userreducer';
import './admin.css'
import { table } from 'fontawesome';

const AllUserList=()=>{

    const getallusers = useSelector(state=> state.GetAllUserReducer )

    const {users , loading , error} = getallusers

    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(GetAllUserAction())
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
                   <th>Created At</th>
                  
                   
                       </tr>
                
               </thead>

               <tbody>
                   {loading && (<Loader/>) }
                   
                   {users && ( users.map(use=>{
                       return <tr>

                           <td> {use._id} </td>
                           <td> {use.name} </td>
                           <td> {use.email} </td>
                           <td> { use.contactnumber } </td>
                           <td>{use.createdAt.substr(0,10)}</td>
                          
                          


                           </tr>
                   }) ) }
               </tbody>
           </table>



        </div>
    )

}

export default AllUserList