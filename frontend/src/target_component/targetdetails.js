import  { useEffect, useState,useRef } from 'react'
import axios from "axios"
import {useReactToPrint} from "react-to-print";



function Targetdetails(){
    const componentPDF=useRef();
    const [showcustomer,setshowcustomer]=useState([]);
    const [searchkey,setsearchkey]=useState('');

//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:8080////")
    console.log(data.data.success)
    if(data.data.success){
        setshowcustomer(data.data.data)
    }
}catch(err){
    alert(err)
}
}
useEffect(()=>{
    getfetchdata()   
},[])

//delete
const handledelete= async(id)=>{
    const data=await axios.delete("http://localhost:8080/delete_target/"+id)
    if(data.data.success){
        getfetchdata()
        console.log(data.data.message)
        alert("target deleted Successfully!")
    }
}
//generatePDF
const generatePDF=useReactToPrint({
    content:()=>componentPDF.current,
    documentTitle:"Target list ",
    onAfterPrint:()=>alert("data save in pdf")
})
//serach
const handlesearch = (e) => {

    filterdata(searchkey);
}
const filterdata = (searchKey) => {
    const filteredData = showcustomer.filter(customer =>
        customer.amount.toLowerCase().includes(searchKey.toLowerCase())
    );
    setshowcustomer(filteredData);
}

    return(
        <div className="showoservices">
        <div className='searchbtn'>
        <input  type="search" onChange={(e)=>setsearchkey(e.target.value)} placeholder='search' className='in'/> <t></t> 
       
        <button  id='search-btn'  onClick={(e)=>handlesearch(e)}> search </button>
        </div>   
                <div ref={componentPDF} style={{width:'100%'}}>
 <table>     
              <tr>
              <th>Amount</th>
              <th>Reamrk</th>
              <th>Dates of  achive your targets</th>
              <th>Remarks</th>
              <th>Action</th>
              </tr>
     

              <tbody>
                  { 
                     showcustomer.map((e1)=>{
                      return(
                          <tr> 
                            <td> {e1.target_amount}</td> 
                            <td> {e1.target_remark}</td> 
                            <td> {e1.target_date}</td> 
                            <td> {e1.target_remarks}</td> 
                            
                            <td className='dback'>
                              <a href={`/update_target/${e1._id}`}>Edit Details</a>
                              <button onClick={()=>handledelete(e1._id)}>Delete</button>
                            </td>
                          </tr>
                      )

              })
                  }
              </tbody>
  </table>
  </div>
  <br></br>
  <button onClick={generatePDF}>Download Income Repoart</button>
        </div>
 
    )
}
export default Targetdetails;