import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import Loader from "../component/loader";
import { LoginCompounder } from "../actions/compounderaction";
import { LoginCompounderReducer } from "../reducers/compounderreducer";

const CompounderLogin=()=>{

    const loginreducer = useSelector(state=>state.LoginCompounderReducer)

    const {loading , error} = loginreducer

    const [name , setname] = useState('')
    const [email , setemail] = useState('')
    const [password , setpassword] = useState('')
    

    const dispatch = useDispatch()

    const login=(e)=>{

        e.preventDefault()

        const user ={
            name : name , 
            email:email ,
            password:password
        }


      dispatch(LoginCompounder(user))
      document.getElementById('Message').innerHTML=error
    }

    const meta = {
        title: 'Doctrap',
        description: 'Doctor Signup ',
        canonical: 'http://example.com/path/to/page',
        meta: {
            charset: 'utf-8',
            name: {
                keywords:  `react,meta,document,html,tags,signup , register , doctrap , docrap , practo , doctorbooking , illness
                
                
                `
            }
        }
    };


    useEffect( ()=>{

        if(localStorage.getItem('compounder'))
        {
            window.location.href='/compounder'
        }


    } ,[])







    return(
        <div>
          

            <DocumentMeta>

            <div id="loginbox" >
<form onSubmit={login}   >
    <h1> Compounder Login </h1>
  
    <hr/>

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








            </DocumentMeta>

            

        </div>
    )


}

export default CompounderLogin;