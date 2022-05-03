import React from "react";
import FilterSearch from "../Header/Filter";
import dr from './drsearch.json'
import { useState } from "react";
import './loader.css'
import '../Header/filter.css'
import IllnessGrid from "../Header/illnessgrid";

const FilterDoctorIllness=()=>{

    const [SearchTerm , setSearchTerm] = useState('')

    return(
        <div>
           

<input type='text' onChange={ (e)=>{ setSearchTerm( e.target.value) } } 

style={{width:'90%' , marginLeft:'5%' , marginRight:'auto' }}

placeholder=' &#xF002; Search Symptoms....'  
        id="search-style-filter"

></input>
<br/><br/><br/><br/><br/>

<div className='Doc-by-Spec'>

{
    dr.filter( (val)=>{
        if(SearchTerm=='')
        {
            return val
        }
        else if( val.search_tags.toLowerCase().includes(SearchTerm.toLowerCase()) )
        {
            return val
        }

    } ) .map( ( val ,key  )=>{

       
        return <div   >
            
            <IllnessGrid val={val} /> 
          
          </div>

          
    } )
}
</div>



        </div>
    )


}

export default FilterDoctorIllness