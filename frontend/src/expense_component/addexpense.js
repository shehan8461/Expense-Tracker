import { useState } from "react";
import axios from "axios";



function AddExpense(){
    const [expense,setexpense]=useState({
        expense_amount:"",
        expense_type:"",
        expense_bank_type:"",
        expense_remark:"",
        
       
    })

    const handleonchange=(e)=>{
        const {value,name}=e.target
        setexpense((preve)=>{
               return{
                ...preve,
                [name]:value
               }
          })
       
        
    }
    
    const handlesubmit=async(e)=>{
     
       e.preventDefault()
       const data=await axios.post("http://localhost:8080/create_expense",expense)
          console.log(data)
          alert("expense add successfully!")
         
     
    }


    return(
        <div className="add-income">
      <div className="nav-new">
     <a href="addincome"><button>Add New Income</button></a> <t></t> <a href="addexpensive"><button>Add New Expensive</button></a> <t></t> <a href="addtarget"><button>Set Saving Targets</button></a>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div>
<h2>Add Expensive</h2>
    <form onSubmit={handlesubmit}>
    <lable>Expense Amount:</lable>
    <input type="text" id="expense_amount" name="expense_amount" onChange={handleonchange}/><br></br>
    <lable>Income Type:</lable>
    <select id="expense_type" name="expense_type" onChange={handleonchange}><br></br> 
        <option>Salary</option>
        <option>Rental</option>
        <option>Goverment Payments</option>
        <option>Dividends</option>
        <option>Interest</option>
        <option>Tips and Commissions</option>
        <option>Unplanned</option>
    </select>
    <br></br>   <br></br>
    <lable>Is The Bank Transaction:</lable>
        <select id="expense_bank_type" name="expense_bank_type" onChange={handleonchange}>
            
            <option>Yes</option>
            <option>No</option>

        </select>
        <br></br>   <br></br>   <br></br>
    <lable>Remarks:</lable>
    <input type="text" id="expense_remark" name="expense_remark" onChange={handleonchange}/><br></br><br></br>
    
  


    <button>ADD EXPENSE</button> <t></t> <br></br><br></br>   <a href="expense_details">Show Expense Details</a>
    </form><br></br> 
   
        </div>
    )
}
export default AddExpense;