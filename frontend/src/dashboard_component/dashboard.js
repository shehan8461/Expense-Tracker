import { useEffect, useState,useRef } from 'react'
import axios from "axios"
import {useReactToPrint} from "react-to-print";
import './dashboard.css'


function DashBoard(){
    const componentPDF=useRef();

    const [countlist,setcountlist]=useState([]);
    const [userlist,setuserlist]=useState([]);
    
    const [incomelist,setincomelist]=useState([]);
    
  

//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:8080/count_expense/")
   const { count } = data.data;
   setcountlist(count);//get count
   setuserlist(data.data.data);//get table data
 
}catch(err){
    alert(err)
}
}
useEffect(()=>{
    getfetchdata()   
},[])


//read
const getfetchnewdata=async()=>{
    try{
    const data=await axios.get("http://localhost:8080/count_income/")
   const { count } = data.data;
   setincomelist(count);//get count
   setuserlist(data.data.data);//get table data
 
}catch(err){
    alert(err)
}
}
useEffect(()=>{
    getfetchnewdata()   
},[])

const generatePDF=useReactToPrint({
    content:()=>componentPDF.current,
    documentTitle:"users list ",
    onAfterPrint:()=>alert("data save in pdf")
})







    return(
        <div>
            
   <div className="nav-new">

     <a href="addincome"><button>Add New Income</button></a> <t></t> <a href="addexpensive"><button>Add New Expensive</button></a> <t></t> <a href="addtarget"><button>Set Saving Targets</button></a>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div>
             <div ref={componentPDF} style={{width:'100%'}}>
                
            <h3  className='expense-list'>Expenses
            <div>
            {
            userlist.map((e)=>{
                return(
               
                    <p> Current Total - {e.expense_amount+e.expense_amount}<br></br>
                     Number of Transaction- {countlist}<br></br>
                     Maximun Transaction-{"55"}<br></br>
                     Average Transaction-{55/countlist}<br></br><br></br>
                     <button><a href='expense_details'>View Expense History</a></button>
                     
                    
                     <p className='income-list'>
                     <h3>Income</h3>
                    Current Total - {e.income_amount+e.income_amount}<br></br>
                     Number of Transaction- {incomelist}<br></br>
                     Maximun Transaction-{"55"}<br></br>
                     Average Transaction-{55/incomelist}<br></br><br></br>
                     <button><a href='income_details'>View Income History</a></button>
                     </p>
                    
                     </p>
                    
                    
                
                )
            })
           }
            </div>
           </h3>
          
          

     
       </div>
     
       <p className='summarized'>
        Want A Summmarized <br></br>
        Repoart Of Your <br></br>
        Transactional Details,<br></br>
        Generate And Download<br></br>
         The Pdf Now.<br></br>
       <button onClick={generatePDF}>Download Repoart</button>
       </p>
       </div>
      
    )
}
export default DashBoard;