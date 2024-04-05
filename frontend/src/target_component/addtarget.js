import { useState } from "react";
import axios from "axios";
import logo from './savings form.png'


function AddTarget(){
    const [target,settarget]=useState({
        target_amount:"",
        target_remark:"",
        target_date:"",
        target_remarks:"",
       
       
    })

    const handleonchange=(e)=>{
        const {value,name}=e.target
        settarget((preve)=>{
               return{
                ...preve,
                [name]:value
               }
          })
       
        
    }
    
    const handlesubmit=async(e)=>{
     
       e.preventDefault()
       const data=await axios.post("http://localhost:8080/create_target",target)
          console.log(data)
          alert("Target add successfully!")
         
        
    }


    return(
        <div className="add-income">
            <img className="imgtarget" src={logo} alt="Logo" width="30%"></img>
      <div className="nav-new">
  
   
     <a href="addincome"><button>Add New Income</button></a> <t></t> <a href="addexpensive"><button>Add New Expensive</button></a> <t></t> <a href="addtarget"><button>Set Saving Targets</button></a>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div><br></br>
   
    <h2 className="value">Set Your Savings Target Now!</h2>

    <form onSubmit={handlesubmit}>
    <lable>Amount:</lable>
    <input type="text" id="target_amount" name="target_amount" onChange={handleonchange}/><br></br>
    <lable>Remark:</lable>
    <input type="text" id="target_remark" name="target_remark" onChange={handleonchange}/><br></br>
    <lable>Set a Date to achive your target:</lable>
    <input type="date" id="target_date" name="target_date" onChange={handleonchange}/><br></br> <br></br>
    <lable>Remarks:</lable>
    <input type="text" id="target_remarks" name="target_remarks" onChange={handleonchange}/><br></br>
     <br></br> <br></br> <br></br> 
  


    <button>ADD Target</button><t></t> <br></br><br></br>
     <a href="income_details"> Show Target Details </a><t></t><br></br><br></br>
    <a href="saving"> Saving Target </a>
    </form><br></br> 
   
        </div>
    )
}
export default AddTarget;