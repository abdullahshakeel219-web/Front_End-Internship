import { useState } from "react";

const App=()=>{
  const[formData,setFormData]=useState({
    fname:"",
    email:"",
    password:"",
    confirmPassword:"",
    phoneNumber:"",
    dob:"",
    gender:"",
    country:""
  });
 const handleSubmit=(e)=>{
  e.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const hasUpperCase=/[A-Z]/;
  const hasNumber=/[0-9]/;
  if(formData.fname.trim()==="" || formData.fname.length<3){
    alert("Name Is Empty Or Length Is Less Than 3");
    return;
  }
  if(formData.email.trim()==="" ||!emailRegex.test(formData.email)){
    alert("Invalid Email");
    return;
  }
  if(formData.password.trim()===""||formData.password.length<8){
    alert("Minimum 8 characters Are Required For Password");
    return;
  }
  if(hasUpperCase.test(formData.password)!==true||hasNumber.test(formData.password)!==true){
    alert("Password Must Contain Atleast One UpperCase Alphabet and Atleast One Number");
    return;
  }
  if(formData.confirmPassword.trim()===""){
    alert("Confirm Password Must Not Be Empty");
    return;
  }
 if(formData.password!==formData.confirmPassword){
  alert("Confirm Password Does Not Match With Password");
  return;
 }
 if(formData.phoneNumber.trim()===""||formData.phoneNumber.length<11){
  alert("Phone Number Length Must Be Equal To 11 Numbers");
  return;
 }
 if(formData.dob.trim()===""||new Date(formData.dob)>new Date()){
  alert("Invalid DOB");
  return;
 }
if (formData.gender === "") {
  alert("Select Gender");
  return;
}
 alert("Data Is Submitted");
 }

 return (
 <form onSubmit={handleSubmit}>

  <h1>Registration Form</h1>
  
  <label htmlFor="name">Full Name</label>
  <input type="text"
   id="name"
   value={formData.fname} 
   onChange={(e)=>setFormData({...formData,fname:e.target.value})}/>


    <label htmlFor="email">Email</label>
    <input type="text"
     id="email"
    value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}/>


    <label htmlFor="password">Password</label>
    <input type="password"
     id="password"
      value={formData.password}
     onChange={(e)=>setFormData({...formData,password:e.target.value})} />


     <label htmlFor="confirmPassword">Confirm Password</label>
     <input type="password"
      id="confirmPassword"
       value={formData.confirmPassword}
       onChange={(e)=>setFormData({...formData,confirmPassword:e.target.value})}/>


  <label htmlFor="number">Phone Number</label>
  <input type="number"
   id="number"
    value={formData.phoneNumber} 
  onChange={(e)=>setFormData({...formData,phoneNumber:e.target.value})}/>


  <label htmlFor="dob">DateOfBirth</label>
  <input type="date" 
  id="dob"
   value={formData.dob} 
  onChange={(e)=>setFormData({...formData,dob:e.target.value})}/>


  <label htmlFor="Gender">Gender</label>
  Male
  <input type="radio" 
   name="Gender"
   value="Male"
   Checked={formData.gender==="Male"}
   onChange={(e)=>setFormData({...formData,gender:e.target.value})}/>


Female
<input type="radio" 
   name="Gender"
   value="Female"
   Checked={formData.gender==="Female"}
   onChange={(e)=>setFormData({...formData,gender:e.target.value})}/>



   <label htmlFor="country">Country</label>
   <input type="text
   " id="country"
    value={formData.country} 
   onChange={(e)=>setFormData({...formData,country:e.target.value})}/>


   <button type="submit" className="btn">Submit</button>
 </form>


 )
}
export default App;