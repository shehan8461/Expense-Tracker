import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';


function UpdateTarget(){
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


    <lable>Amount:</lable>
    <input type="text" id="target_amount" name="target_amount" onChange={handleInputChange} value={updatediscount?.target_amount }/><br></br>
    <lable>Remark:</lable>
    <input type="text" id="target_remark" name="target_remark" onChange={handleInputChange} value={updatediscount?.target_remark }/><br></br>
    <lable>Set a Date to achive your target:</lable>
    <input type="date" id="target_date" name="target_date" onChange={handleInputChange} value={updatediscount?.target_date }/><br></br>
    <lable>Remarks:</lable>
    <input type="text" id="target_remarks" name="target_remarks" onChange={handleInputChange} value={updatediscount?.target_remarks }/><br></br>

  



  
    <button onClick={handleUpdate}>Update Target Details</button><br></br> <br></br> 

 
        </div>
    )
}
export default UpdateTarget;