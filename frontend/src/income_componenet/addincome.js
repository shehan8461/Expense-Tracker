import { useState } from "react";
import axios from "axios";
import './addincome.css'


function AddIncome(){
    const [income,setincome]=useState({
        income_amount:"",
        income_type:"",
        income_bank_type:"",
        income_remark:"",
        
       
    })

    const handleonchange=(e)=>{
        const {value,name}=e.target
        setincome((preve)=>{
               return{
                ...preve,
                [name]:value
               }
          })
       
        
    }
    
    const handlesubmit=async(e)=>{
     
       e.preventDefault()
       const data=await axios.post("http://localhost:8080/create_income",income)
          console.log(data)
          alert("Income add successfully!")
         
        
    }


    return(
        <div className="add-income">
    <div className="nav-new">
     <a href="addincome"><button>Add New Income</button></a> <t></t> <a href="addexpensive"><button>Add New Expensive</button></a> <t></t> <a href="addtarget"><button>Set Saving Targets</button></a>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div>
<h2>Add Income</h2>
    <form onSubmit={handlesubmit}>
    <lable>Income Amount:</lable>
    <input type="text" id="income_amount" name="income_amount" onChange={handleonchange}/><br></br>

    <lable>Income Type:</lable>
    <select id="income_type" name="income_type" onChange={handleonchange}><br></br> 
        <option>Rent</option>
        <option>Utility</option>
        <option>Entertainment</option>
        <option>Meals</option>
        <option>Membership fees</option>
        <option>Interest</option>
        <option>Education</option>
        <option>Repairs</option>
        <option>Unplanned</option>
    </select>
    <br></br>   <br></br>
    <lable>Is The Bank Type:</lable>
        <select id="income_bank_type" name="income_bank_type" onChange={handleonchange}>
            
            <option>Yes</option>
            <option>No</option>

        </select>
        <br></br>   <br></br>   <br></br>
    <lable>Remarks:</lable><br></br>
    <input type="text" id="income_remark" name="income_remark" onChange={handleonchange}/><br></br>
     <br></br> <br></br> <br></br> 
  


    <button>ADD Income</button> <t></t><br></br><br></br> <a href="income_details">Show Income Details</a><br></br>
    </form><br></br> 
   
        </div>
    )
}
export default AddIncome;