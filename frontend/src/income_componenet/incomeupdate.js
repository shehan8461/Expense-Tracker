import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './incomeupdate.css'

function UpdateIncome(){
    const { id } = useParams();
    const [updatediscount,setupdatediscount]=useState({
        income_amount:"",
        income_type:"",
        income_bank_type:"",
        income_remark:"",
        
        
    })

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:8080/user_income/${id}`);
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
          const response = await fetch(`http://localhost:8080/update_income`, {
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


    <lable>Income Amount:</lable>
    <input type="text" id="income_amount" name="income_amount" onChange={handleInputChange} value={updatediscount?.income_amount }/><br></br>
    <lable>Income Type:</lable>
    <select id="income_type" name="income_type" onChange={handleInputChange} value={updatediscount?.income_type }><br></br> 
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
        <select id="income_bank_type" name="income_bank_type" onChange={handleInputChange} value={updatediscount?.income_bank_type }>
            
            <option>Yes</option>
            <option>No</option>

        </select>
        <br></br>   <br></br>   <br></br>
    <lable>Remarks:</lable>
    <input type="text" id="income_remark" name="income_remark" onChange={handleInputChange} value={updatediscount?.income_remark }/><br></br>

  



  
    <button onClick={handleUpdate}>Update User Details</button><br></br> <br></br> 

 
        </div>
    )
}
export default UpdateIncome;