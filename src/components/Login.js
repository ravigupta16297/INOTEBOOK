import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


const Login=(props)=>{
         const [credentials,setCredentials]=useState({email:" ",password:" "})
         let history=useHistory();
    const onChange=((e)=>{
        setCredentials({...credentials, [e.target.name]:e.target.value})
        
    })
    const handleClick=(async(e)=>{
        e.preventDefault();

        const response =  await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
        },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
        });
       const val=await response.json()
       
      localStorage.setItem('uname',val.user.name)
      localStorage.setItem('udate',val.user.date)
      localStorage.setItem('uemail',val.user.email)  
      localStorage.setItem('uid',val.user._id)
  
       if(val.success)
       {
         localStorage.setItem('token',val.AuthToken)
         history.push('/');
         props.showAlert("logged in successfully","success")
       }
       else{
       props.showAlert("Invalid credentials","danger")
       }
       
    })
    return(
      <>
    <div className='login'>
    <h2 className='text-center'>Login</h2>
    <div className='container text-center'><img src='/favicon.ico' alt="none" width='10%' height='1%'></img></div><br/>
    
        <form className='my-4'>
  <div className="mb-6  ">
  <div ><strong><label htmlFor="exampleInputEmail1" className="form-label">Email address</label></strong></div>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"  placeholder='please enter your email' onChange={onChange}/><br/>
    
  <div className="mb-3">
  <div className=' my-1'><strong><label htmlFor="exampleInputPassword1" className="form-label">Password</label></strong></div>
    <input type="password" className="form-control" id="password" name="password" placeholder="Please enter your password" onChange={onChange}/>
    
  </div>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
        
    </div>

</>
    )}
export default Login  