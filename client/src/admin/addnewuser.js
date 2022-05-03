import React , {useState, useEffect} from 'react'
import {Link , useParams ,  useHistory ,useLocation  } from 'react-router-dom'
import Rating from 'react-rating'
import './admin.css'
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { RegisterNewUserAdmin } from "../actions/useraction";
import { RegisterUserReducer } from "../reducers/userreducer";

import Loader from "../component/loader";


const AddNewUser=()=>{


    const registreducer = useSelector(state => state.RegisterUserReducer)

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
            dispatch(RegisterNewUserAdmin(user))
        }
        else {
            document.getElementById('Message').innerHTML = 'Passwords Not Matched'
            //alert('Passwords Not Matched')
        }



    }


    const meta = {
        title: 'Doctrap',
        description: 'Signup Page for Doctrap',
        canonical: 'http://example.com/path/to/page',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: `react,meta,document,html,tags,signup , register , doctrap , docrap , practo , doctorbooking , illness 
            
            `
          }
        }
      };









    return(
        <div>



            <DocumentMeta {...meta}>
        <div>



           

              




                <p>

                    <form onSubmit={register} >

                        <div id="loginbox" >


                        <h2>ADMIN USER REGISTRATION</h2>

                          

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


                            }}  >Register this user</button>

                        

                            {loading && ( <Loader/> ) }

                            <br/><br/>


                            {error && ( <p  id="message" >Email Already Registered</p> )  }

{success && ( <p  id="message" > Registered Successfully</p> ) }








                        </div>


                    </form>




                </p>







       





        </div>
        </DocumentMeta>



        </div>
    )



}

export default AddNewUser