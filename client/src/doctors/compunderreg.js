import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import { RegisterNewCompounder } from "../actions/compounderaction";
import { RegisterCompounderReducer } from "../reducers/compounderreducer";
import Loader from "../component/loader";


const CompounderRegister=({docid})=>{

    const registreducer = useSelector(state => state.RegisterCompounderReducer)

    const dispatch = useDispatch()
    const { loading, error, success } = registreducer

    const [name, setname] = useState('')
    const [drid, setdrid] = useState(docid)
    const [email, setemail] = useState('')
    const [contactnumber, setcontactnumber] = useState();
    const [password, setpassword] = useState('')


    const register = (e) => {

        e.preventDefault()

        const user = {
            name: name,
            
            contactnumber: contactnumber,
            email: email,
            password: password ,
            docid:drid
           
        }


       dispatch(RegisterNewCompounder(user))



    }
    const meta = {
        title: 'Doctrap',
        description: 'Doctor Signup ',
        canonical: '',
        meta: {
            charset: 'utf-8',
            name: {
                keywords:  `react,meta,document,html,tags,signup , register , doctrap , docrap , practo , doctorbooking , illness
                ${name} 
                
                `
            }
        }
    };


    useEffect( ()=>{

        if(localStorage.getItem('currentuser') || localStorage.getItem('admin') || localStorage.getItem('compounder')  )
        {
            window.location.href='/drpage'
        }


    } ,[])


    


    return(
        <div>



<form onSubmit={register} >

<div id="loginbox" >


    <h1> Register Compounder </h1>

  

    <hr />


    <div className="boxgrid" >

        <p style={{margin:'2%'}}  >
            <label className="formtext"   > Name</label>
            <input type="text"

                value={name}
                required
                onChange={(e) => { setname(e.target.value) }}

                placeholder='Enter Name' />
        </p>

   



        <p style={{margin:'2%'}}>
            <label className="formtext"




            >Email Id</label>
            <input type="text"

                value={email}
                required
                onChange={(e) => { setemail(e.target.value) }}

                placeholder='Enter Email Id' />

        </p>


        <p style={{margin:'2%'}} >

            <label className="formtext">Contact Number</label>
            <input type="Number"

                value={contactnumber}
                required
                onChange={(e) => { setcontactnumber(e.target.value) }}


                placeholder='Contact Number' />


        </p>




    


   








        <p style={{margin:'2%'}}>
            <label className="formtext">Password</label>
            <input type="password"

                value={password}
                required
                onChange={(e) => { setpassword(e.target.value) }}


                placeholder='Enter Password' />

        </p>

    

        




    </div>


    <br/> <br/> <br/><br/> <br/><br/>
    <button type='submit' className='box1' id="signupbtn" style={{


    }}  >Register</button>



    {loading && ( <Loader/> ) }

    <br/><br/>


    {error && ( <p  id="message" >Email Already Registered</p> )  }

{success && ( <p  id="message" > Registered Successfully</p> ) }








</div>


</form>



          

        </div>
    )


}

export default CompounderRegister;