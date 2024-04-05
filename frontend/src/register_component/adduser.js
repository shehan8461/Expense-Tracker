import { useState } from "react";
import axios from "axios";
import './adduser.css'
import logo from './register&login.png';

function AddAccount(){
    const [user,setuser]=useState({

        fname:"",
        lname:"",
        email:"",
        password:"",
        
       
    })
    const [errors, setErrors] = useState({});
    const handleonchange=(e)=>{
        const {value,name}=e.target
        setuser((preve)=>{
               return{
                ...preve,
                [name]:value
               }
          })
       
        
    }
    const validateForm = () => {
        const errors = {};
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!user.email.trim()) {
          errors.email = 'Email is required';
        } else if (!emailRegex.test(user.email)) {
          errors.email = 'Invalid email format';
        }
    
        // Password validation
        if (!user.password.trim()) {
          errors.password = 'Password is required';
        } else if (user.password.length < 6) {
          errors.password = 'Password must be at least 6 characters long';
        }
    
        setErrors(errors);
        return Object.keys(errors).length === 0; // Returns true if there are no errors
      };
 
    const handlesubmit=async(e)=>{
     
       e.preventDefault()
       const data=await axios.post("http://localhost:8080/create",user)
          console.log(data)
          alert("registered successfully!")

          const isValid = validateForm();
          if (isValid) {
            // Perform registration or submit the form data
            console.log(user);
            // You can call your API to submit the form data here
          }
     
    }


    return(
        <div className="add-user">
     <img className="imglogin" src={logo} alt="Logo" width="35%"></img>
<h2><b>Create An Account</b></h2>
    <form onSubmit={handlesubmit}>
    <lable>First Name:</lable>
    <input type="text" id="fname" name="fname" value={user.fname} onChange={handleonchange}/><br></br>
    <lable>Last Name:</lable>
    <input type="text" id="lname" name="lname" value={user.lname} onChange={handleonchange}/><br></br>
    <lable>Email Address:</lable>
    <input type="text" id="email" name="email" value={user.email} onChange={handleonchange}/><br></br> 
    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}<br />
    <lable>Password:</lable>
    <input type="text" id="password" name="password" value={user.password} onChange={handleonchange}/><br></br>
    {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}<br />
        <br />
     <br></br> <br></br> <br></br> 
  


  <button>Register</button>

    </form><br></br> 
    <button> <a href="afterlogorsign">Next</a> </button>
        </div>
    )
}
export default AddAccount;