import React , {useState, useEffect} from 'react'
import {Link , useParams ,  useHistory ,useLocation  } from 'react-router-dom'
import Rating from 'react-rating'
import './admin.css'
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { RegisterNewDoctorAdmin } from '../actions/doctoraction'
import { RegisterDoctorReducer } from "../reducers/doctorreducer";
import { ad } from "fontawesome";
import Loader from '../component/loader'


const AddNewDoctor=()=>{


    const registreducer = useSelector(state => state.RegisterDoctorReducer)

    const dispatch = useDispatch()
    const { loading, error, success } = registreducer

    const [name, setname] = useState('')
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')
    const [contactnumber, setcontactnumber] = useState();
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const [fees,setfees]=useState()
    const [experience,setexperience] = useState()
    const [college,setcollege]=useState()
    const [address,setaddress] = useState('')
    const [field , setfield] = useState('')
    const [image , setimage]=useState('')
    const [description,setdescription]=useState('')


    const register = (e) => {

        e.preventDefault()

        const user = {
            name: name,
            lname: lname,
            contactnumber: contactnumber,
            email: email,
            password: password ,
            fees:fees ,
            experience:experience ,
            address :address ,
            field:field ,
            image:image ,
            college:college ,
            description:description
        }


        if (password === cpassword) {
            dispatch(RegisterNewDoctorAdmin(user))
        }
        else {
            document.getElementById('Message').innerHTML = 'Passwords Not Matched'
            
        }



    }
    const meta = {
        title: 'Doctrap',
        description: 'Doctor Signup ',
        canonical: '',
        meta: {
            charset: 'utf-8',
            name: {
                keywords:  `react,meta,document,html,tags,signup , register , doctrap , docrap , practo , doctorbooking , illness
                ${name} , ${address} , ${email} , ${fees} , ${experience} , ${description}
                
                `
            }
        }
    };






    return(
        <div>

<form onSubmit={register} >

<div id="loginbox" >


   

    <p> ADMIN DOCTOR REGISTER </p>

    <hr />


    <div className="boxgrid">

        <p  >
            <label className="formtext" > Name</label>
            <input type="text"

                value={name}
                required
                onChange={(e) => { setname(e.target.value) }}

                placeholder='Enter Name' />
        </p>

        <p style={{ marginLeft: '5px' }}>
            <label className="formtext">Last Name</label>


            <input type="text" placeholder='Last Name'

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
            <label className="formtext">Fees</label>
            <input type="text"

                value={fees}
                required
                onChange={(e) => { setfees(e.target.value) }}


                placeholder='Enter Fees' />

        </p>

        <p style={{ marginLeft: '5px' }} >
            <label className="formtext">College Name</label>
            <input type="text" placeholder='Enter College Name'

                value={college}
                required
                onChange={(e) => { setcollege(e.target.value) }}



            />

        </p>





        
        <p>
<br/>
        <label className="formtext">Field</label>

        
<select value={field} onChange={ (e)=>{ setfield(e.target.value) } }  id='select-doc' style={{marginTop:'50px' , float:'left' }}  >

<option value='all'  >All</option>
<option value='Physician'  >

Physician</option>
<option value='Cardiologist' >Cardiologist</option>
<option value='Orthopaedic' >Orthopaedic</option>
<option value='Gynecologist' >Gynecologist</option>
<option value='Pummonologist' >Pummonologist</option>
<option value='Neurologist' >Neurologist</option>
<option value='Endocrinologist' >Endocrenologist</option>
<option value='Dermatologist' >Dermatologist</option>
<option value='Paediatrician' >Paediatrician</option>
<option value='Dentist' >Dentist</option>
<option value='Diabetologist' >Diabetologist</option>
<option value='Ophthalmologist' >Ophthalmologist</option>
<option value='Sexologist' >Sexologist</option>
<option value='Ophthalmologist' >Ophthalmologist</option>
<option value='Nutrition' >Nutritionist</option>
<option value='ENT-Specialist' >ENT Specialist</option>
<option value='Psychiatrist' >Psychiatrist</option>
<option value='Nephrologist' >Nephrologist</option>
<option value='Oncologist' >Oncologist</option>
<option value='Urologist' >Urologist</option>
<option value='Gastroenterologists' >Gastroenterologists</option>
<option value='Obstetricians' >Obstetricians</option>


</select> 


        
         

        </p>




        <p style={{ marginLeft: '5px' }} >
            <label className="formtext">Clinic Address</label>
            <input type="text" placeholder='Enter Address'

                value={address}
                required
                onChange={(e) => { setaddress(e.target.value) }}



            />

        </p>



        <p style={{ marginLeft: '5px' }}>
            <label className="formtext">Years of Experience</label>


            <input type="Number" placeholder='Years of Experience'

                value={experience}
                required
                onChange={(e) => { setexperience(e.target.value) }}

            />

        </p>


        <p style={{ marginLeft: '5px' }}>
            <label className="formtext">Image Link</label>


            <input type="text" placeholder='Enter Image Link'

                value={image}
                required
                onChange={(e) => { setimage(e.target.value) }}

            />

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

<label className="formtext">Enter Description</label>
    <input value={description} 
    
    required  placeholder='Enter Description....' 
    onChange={ (e)=>{setdescription(e.target.value)} } 
    
    className='doc-descroption-input'
    
    />
    <br/> <br/> <br/><br/> <br/><br/>
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

export default AddNewDoctor