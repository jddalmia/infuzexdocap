import React from "react";
import { BrowserRouter , Route ,Link , Switch } from "react-router-dom";
import EditDoctor from "../admin/editdoc";
import GetCompounder from "../compounder/allcompounder";
import CompounderRegister from "./compunderreg";
import UpdateProfile from "./updateprofile";


const DoctorPage=()=>{
    const doctor = JSON.parse(localStorage.getItem('doctor'))

    return(
        <div>
        



            <ul className='makebig'  >
                    <li ><Link to='/drpage/dailyschedule'   className='stylebar'   > Daily Schedule</Link>  </li>
                    <li ><Link to='/drpage/addcompounder'   className='stylebar' >Add Compounder</Link>   </li>
                     <li ><Link to={`/drpage/update/${doctor._id}`}   className='stylebar'>Update My  Profile</Link>   </li> 
                    <li ><Link to='/drpage/compounderinfo'  className='stylebar'>See Compounder</Link>   </li>
                  
                </ul>


                <Switch>

<Route path="/drpage/userlist"    ></Route>
<Route path="/drpage/addcompounder"  ><CompounderRegister docid={doctor._id} /></Route>
 <Route path="/drpage/update/:doctor" component={UpdateProfile}  ><UpdateProfile/></Route>
 <Route path='/drpage/compounderinfo' >< GetCompounder docid={doctor._id} /></Route> 



</Switch>


        </div>
    )


}

export default DoctorPage;