import React from "react";
import { BrowserRouter , Route ,Link , Switch } from "react-router-dom";
import AllDrList from "./drlist";
import drreq from "./drreq";
import AllUserList from "./userlist";
import DrReq from './drreq'
import FilterSearch from "../Header/Filter";
import EditDoctor from "./editdoc";
import DoctorApprove from "./drapprove";
import AddNewUser from "./addnewuser";
import AddNewDoctor from "./addnewdoctor";

const AdminScreen=()=>{

    const admin=JSON.parse(localStorage.getItem('admin'))


    return(
        <div>
           { admin ? ( <div>
              

             

              <ul className='makebig'  >
                    <li ><Link to='/admin/userlist'   className='stylebar'   > User List</Link>  </li>
                    <li ><Link to='/admin/doctorlist'   className='stylebar' >Doctor List </Link>   </li>
                    <li ><Link to='/admin/addnewuser'  className='stylebar'>Add New User</Link>   </li>
                    <li ><Link to='/admin/addnewdoc'  className='stylebar'>Add New Doctor</Link>    </li>
                    <li ><Link to='/admin/reqlist'  className='stylebar'> Doctor Request List</Link>    </li>

                </ul>


                <Switch>

<Route path="/admin/userlist"   ><AllUserList/></Route>
<Route path="/admin/doctorlist"  ><AllDrList/></Route>
<Route path="/admin/addnewuser" component={AddNewUser} ></Route>
<Route path="/admin/addnewdoc" component={AddNewDoctor} ></Route>
<Route path="/admin/reqlist"  ><DrReq/></Route>
<Route path="/admin/dredit/:doctor" component={EditDoctor}  ><EditDoctor/></Route>
<Route path='/admin/doctorapprove/:doctor' component ={DoctorApprove}><DoctorApprove/></Route>

</Switch>
               
               
               </div> ): (
                   <div>
                       Please Login
                       </div>
               )  }

        </div>
    )
}


export default AdminScreen;