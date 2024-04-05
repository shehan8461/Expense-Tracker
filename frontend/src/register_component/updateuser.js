import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';


function UpdateUser(){
    const { id } = useParams();
    const [updatediscount,setupdatediscount]=useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        
        
    })

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:8080/user/${id}`);
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
          const response = await fetch(`http://localhost:8080/update`, {
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


    <lable>First Name:</lable>
    <input type="text" id="fname" name="fname" onChange={handleInputChange} value={updatediscount?.fname }/><br></br>
    <lable>Last Name:</lable>
    <input type="text" id="lname" name="lname" onChange={handleInputChange} value={updatediscount?.lname }/><br></br>
    <lable>Email Address:</lable>
    <input type="text" id="email" name="email" onChange={handleInputChange} value={updatediscount?.email }/><br></br>
    <lable>Password:</lable>
    <input type="text" id="password" name="password" onChange={handleInputChange} value={updatediscount?.password }/><br></br>

  



  
    <button onClick={handleUpdate}>Update User Details</button><br></br> <br></br> 

 
        </div>
    )
}
export default UpdateUser;