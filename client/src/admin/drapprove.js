import React , {useState, useEffect} from 'react'
import {Link , useParams ,  useHistory ,useLocation  } from 'react-router-dom'
import Rating from 'react-rating'
import './admin.css'
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetDoctorById } from '../actions/doctoraction';
import { GetDoctorByIdReducer } from '../reducers/doctorreducer';
import Loader from "../component/loader";
import { UpdateDoctorReducer } from '../reducers/doctorreducer';
import { UpdateDoctorAction } from '../actions/doctoraction';


const DoctorApprove=()=>{


    const [name,setname] = useState('')
    const [lname,setlname] = useState('')
    const [email,setemail] = useState('')
    const [contactnumber,setcontactnumber] = useState()
    const [fees,setfees] = useState()
    const [college,setcollege] = useState('')
    const [experience,setexperience]=useState()
    const [field,setfield] = useState('')
    const [address,setaddress]=useState('')
    const [image,setimage]=useState('')
    const [description,setdescription]=useState('')
    const [status,setstatus] = useState('')
   

     const location = useLocation()

     var testpath = location.pathname

     var doctorid = location.pathname.substr(21,testpath.length)

    const dispatch = useDispatch()

    const dridstate = useSelector(state=>state.GetDoctorByIdReducer)
    const { loading, doctors ,error} = dridstate

    const currentuser = JSON.parse(localStorage.getItem('currentuser'))

   

  
    const updatestate = useSelector(state=> state.UpdateDoctorReducer )

    const {success , update_error , uploading } = updatestate

    useEffect(() => {
        
        
        if( doctors )
        {
            if( doctors._id==doctorid )
            {
                setname(doctors.name)
                setlname(doctors.lname)
                setimage(doctors.image)
                setaddress(doctors.address)
                setcollege(doctors.college)
                setcontactnumber(doctors.contactnumber)
                setdescription(doctors.description)
                setemail(doctors.email)
                setstatus(doctors.status)
                setfees(doctors.fees)
                setexperience(doctors.experience)
                setfield(doctors.field)
                
            }
            else
            {
                dispatch(GetDoctorById( {doctorid} ))

            }
        }

        else
        {
            dispatch(GetDoctorById( {doctorid} ))
        }

        

    }, [dispatch,doctors])


    const editdoctor = (e) => {
        e.preventDefault()
        const updatedproduct = {
            name: name,
            lname:lname ,
            image: image,
            description: description ,
            field:field ,
            status:status ,
            fees:fees ,
            college:college ,
            experience:experience ,
            email : email ,
            contactnumber :contactnumber  ,
            address : address
        }

        dispatch(UpdateDoctorAction(doctorid, updatedproduct))


    }




    return(
        <div>

{loading && <Loader/> }
  

        {
            doctors && ( 
                <div>
   <img src={`/images/${doctors.image}`} id="img-docdes"/>

<h3 className='docdes-name' > Dr. {doctors.name}  {doctors.lname}  </h3>
 <p className='docdes-sub' > {doctors.field} </p>
 <br/>
 <p className='docdes-sub' style={{fontWeight:'bold'}} > {doctors.experience} Years Exp </p>
 <br/>
<h4 className='docdes-sub'> {doctors.address} </h4>

<hr/>
<h1> This Section is only visible to Admin </h1>

<h4 className='docdes-name'> Name of College : {doctors.college} </h4>
<h4 className='docdes-name'>Contact Number {doctors.contactnumber} </h4>

<h4 className='docdes-name'> Email ID : {doctors.email} </h4>

<h2>About : {doctors.description} </h2> 



<form onSubmit={editdoctor} >

<select value={status} onChange={ (e)=>{ setstatus(e.target.value)   } } 
                
                id='show-hide'
                
                >

                    <option value='true' >Approve</option>
                    <option value='false' >Deny </option>

                </select>

                <br/><br/>




                <button type="submit"  className='docdes-box1' style={{
                    marginLeft:'auto' ,
                    marginRight:'auto'
                }}    id='post-button' > UPDATE </button>




</form>



                    </div>
             )
        }


       


        </div>
    )


}

export default DoctorApprove