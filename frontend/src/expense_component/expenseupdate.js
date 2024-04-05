import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';


function UpdateExpence(){
    const { id } = useParams();
    const [updatediscount,setupdatediscount]=useState({
        expense_amount:"",
        expense_type:"",
        expense_bank_type:"",
        expense_remark:"",
        
        
    })

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:8080/user_expense/${id}`);
            const data = await response.json();
            console.log(data);
    
            if (data.success) {
                setupdatediscount(data.data);
            } else {
              console.error(data.message);
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUserData();
      }, []);



      const handleInputChange = (e) => {
        setupdatediscount({
          ...updatediscount,
          [e.target.name]: e.target.value,
        });
      };
      const handleUpdate = async () => {
        try {
          const response = await fetch(`http://localhost:8080/update_expense`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: updatediscount._id,
              ...updatediscount,
            }),
          });
    
          const data = await response.json();
    
          if (data.success) {
            console.log('user  updated successfully');
           alert("updated successfully");

          } else {
            console.error(data.message);
          }
        } catch (error) {
          console.error('Error updating user:', error);
        }
      };


    return(
        <div className='service-update'>


    <lable>Expense Amount:</lable>
    <input type="text" id="expense_amount" name="expense_amount" onChange={handleInputChange} value={updatediscount?.expense_amount }/><br></br>
    <lable>Income Type:</lable>
    <select id="expense_type" name="expense_type" onChange={handleInputChange} value={updatediscount?.expense_type }><br></br> 
        <option>Salary</option>
        <option>Rental</option>
        <option>Goverment Payments</option>
        <option>Dividends</option>
        <option>Interest</option>
        <option>Tips and Commissions</option>
        <option>Unplanned</option>
    </select>
    <br></br>   <br></br>
    <lable>Is This Bank Transaction:</lable>
        <select id="expense_bank_type" name="expense_bank_type" onChange={handleInputChange} value={updatediscount?.expense_bank_type}>
            
            <option>Yes</option>
            <option>No</option>

        </select>
        <br></br>   <br></br>   <br></br>
    <lable>Remarks:</lable>
    <input type="text" id="expense_remark" name="expense_remark" onChange={handleInputChange} value={updatediscount?.expense_remark }/><br></br>

  



  
    <button onClick={handleUpdate}>Update User Details</button><br></br> <br></br> 

 
        </div>
    )
}
export default UpdateExpence;