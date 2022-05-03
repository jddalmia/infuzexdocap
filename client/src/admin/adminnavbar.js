import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import { LogOutAdmin } from "../actions/adminaction";
import Loader from "../component/loader";





const AdminNavBar=()=>{

    const admin=JSON.parse(localStorage.getItem('admin'))


    const dispatch = useDispatch()


    return(
        <div>
           <h2>Welcome To Admin Screen</h2>
         
           <ul>
               <a href='/admin'>
               <li style={{color:'black'}} >ADMIN</li>
                </a>

           <li className="box1" style={{float:'right'}} 

onClick={() => { dispatch(LogOutAdmin() ) } }

> 

Logout
</li>

               </ul>
   

        </div>
    )
}

export default AdminNavBar