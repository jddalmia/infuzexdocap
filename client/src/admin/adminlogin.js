import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import '../screen/login.css'
import Loader from "../component/loader";
import { AdminLoginAction } from "../actions/adminaction";
import { LoginAdminReducer } from "../reducers/adminred";



const AdminLogin=()=>{


    const loginreducer = useSelector(state=>state.LoginAdminReducer)

    const {loading , error} = loginreducer



    const [name , setname] = useState('')
    const [email , setemail] = useState('')
    const [password , setpassword] = useState('')


    const dispatch = useDispatch()

    const login=(e)=>{

        e.preventDefault()

        const admin ={
            name : name , 
            email:email ,
            password:password
        }


      dispatch(AdminLoginAction(admin))
      document.getElementById('Message').innerHTML=error
    }


    useEffect( ()=>{

        if(localStorage.getItem('admin') ||localStorage.getItem('currentuser')  )
        {
            window.location.href='/admin'
        }


    } ,[])
    



    return(
        <div>
            
            Admin Login


            <div id="loginbox" >
<form onSubmit={login}   >
   

<label className="formtext" >Enter Email</label>
                <input type="text"

value={email} 
                    required
                  
                    onChange={ (e)=>{ setemail(e.target.value) } }   
                    placeholder='Enter Email' />



<label className="formtext" >Enter Password</label>
                <input type="password"
value={password}
                   
                    required

                    onChange={ (e)=>{ setpassword(e.target.value) } } 
                  

                    placeholder='Enter Password' />   




<button  type='submit' className='box1' id="signupbtn"

style={{marginTop:'10px'}}


>LOGIN</button>

{loading && <Loader/>}
<p id='Message'   ></p>


</form>

</div>



        </div>
    )
}


export default AdminLogin;