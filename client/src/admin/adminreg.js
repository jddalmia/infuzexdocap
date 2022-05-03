import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import '../screen/login.css'
import Loader from "../component/loader";
import { RegisterNewAdmin } from "../actions/adminaction";
import { RegisterAdminReducer } from "../reducers/adminred";



const AdminRegistration=()=>{



    const registreducer = useSelector(state => state.RegisterAdminReducer)

    const dispatch = useDispatch()
    const { loading, error, success } = registreducer

    const [name, setname] = useState('')
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')
    const [contactnumber, setcontactnumber] = useState();
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')


    const register = (e) => {

        e.preventDefault()

        const user = {
            name: name,
            lname: lname,
            contactnumber: contactnumber,
            email: email,
            password: password
        }


        if (password === cpassword) {
            dispatch(RegisterNewAdmin(user))
        }
        else {
            document.getElementById('Message').innerHTML = 'Passwords Not Matched'
            //alert('Passwords Not Matched')
        }



    }



    useEffect( ()=>{

        if(localStorage.getItem('admin'))
        {
            window.location.href='/admin'
        }


    } ,[])




    return(
        <div>
            This is Admin Registration


            <form onSubmit={register} >

<div id="loginbox" >


    <h1> Register Here </h1>

    <p> Already have an account ?  <a href="/login"> Login Here </a>  </p>

    <hr />


    <div className="boxgrid">

        <p  >
            <label className="formtext" >First Name</label>
            <input type="text"

                value={name}
                required
                onChange={(e) => { setname(e.target.value) }}

                placeholder='Enter Name' />
        </p>

        <p style={{ marginLeft: '5px' }}>
            <label className="formtext">Last Name</label>


            <input type="text" placeholder='Enter Last Name'

                value={lname}
                required
                onChange={(e) => { setlname(e.target.value) }}

            />

        </p>



        <p>
            <label className="formtext"




            >Email Id</label>
            <input type="text"

                value={email}
                required
                onChange={(e) => { setemail(e.target.value) }}

                placeholder='Enter Email Id' />

        </p>


        <p style={{ marginLeft: '5px' }} >

            <label className="formtext">Contact Number</label>
            <input type="Number"

                value={contactnumber}
                required
                onChange={(e) => { setcontactnumber(e.target.value) }}


                placeholder='Contact Number' />


        </p>




        <p>
            <label className="formtext">Password</label>
            <input type="password"

                value={password}
                required
                onChange={(e) => { setpassword(e.target.value) }}


                placeholder='Enter Password' />

        </p>

        <p style={{ marginLeft: '5px' }} >
            <label className="formtext">Confirm Password</label>
            <input type="password" placeholder='Enter Confirm Password'

                value={cpassword}
                required
                onChange={(e) => { setcpassword(e.target.value) }}



            />

        </p>




    </div>
    <button type='submit' className='box1' id="signupbtn" style={{


    }}  >SignUp</button>



    {loading && ( <Loader/> ) }

    <br/><br/>


    {error && ( <p  id="message" >Email Already Registered</p> )  }

{success && ( <p  id="message" > Registered Successfully</p> ) }








</div>


</form>





        </div>
    )
}


export default AdminRegistration