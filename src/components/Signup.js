import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Signup = (props) => {
   
  let history=useHistory();
  const [info, setInfo] = useState({ name: "", email: "", password: "" })
  const onChange = ((e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  })
  const handleClick = (async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: info.name, email: info.email, password: info.password })
    });
    const res = await response.json();
    if (res.success) {
      props.showAlert("Successfully created the account", "success")
      history.push('/');
    }
    else {
      props.showAlert("Acccount with same email already exists", "danger")
    }
  })
  return (
    <div>
      <div className='signup'>
      <h2 className='text-center'>Sign-Up</h2>
      <div className='container text-center'><img src='/favicon.ico' alt="none" width='10%' height='1%'></img></div><br/>
      
     
      <form className='my-2'>
        <div className="mb-6  ">
         <strong> <label htmlFor="exampleInputEmail1" className="form-label">Name</label></strong>
          <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder='please enter your name' onChange={onChange} /><br/>

          <strong>  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label></strong>
          <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder='please enter your email' onChange={onChange} /><br/>

          <div className="mb-3">
          <strong> <label htmlFor="exampleInputPassword1" className="form-label">Password</label></strong>
            <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" onChange={onChange} />

          </div>
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
      </form>

      </div>
    </div>
  )
}
export default Signup 
