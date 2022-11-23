import React, { useRef, useState } from 'react'
const Userdetail = (props) => {
   
  const val1=localStorage.getItem('uname')
  const val2=localStorage.getItem('uemail')
  const val3=localStorage.getItem('udate')
  const val4=localStorage.getItem('uid')
  const len=localStorage.getItem('len');
   
   const ref=useRef(null);
   const refclose=useRef(null);
   const refid=useRef(null);

   const [pass,chgPass]=useState({old:" ",new:" "});
   const handleClick=(()=>{
     ref.current.click();
   })
   const handlechgpass=(async()=>{
     refclose.current.click();
     
     const response =  await fetch('http://localhost:5000/api/auth/chgpass', {
      method: 'POST', 
      headers: {
          'Content-Type': 'application/json',
  },
      body: JSON.stringify({oldp:pass.old,newp:pass.new,id:localStorage.getItem('uid')})
  });
 const val=await response.json()
 console.log(val);
 props.showAlert("Password updated successfully","success")

   })
   const onchange=((e)=>{
    chgPass({...pass, [e.target.name]:e.target.value})
   })



   const handlechgid=(async()=>{
     refid.current.click();
   })
  return (
    <>
    <div className="container">
      <h2 className='text-center mb-5'>Welcome to I-Note {val1.charAt(0).toUpperCase()+""+val1.slice(1)}</h2>
      
<table className="table table-bordered table-dark">
  <thead>
    <tr>
      <th className="text-center" scope="col"></th>
      <td className="text-center"></td >
      </tr>
      <tr>
      <th className="text-center" scope="col">Total Notes Added</th>
      <td className="text-center">{len}</td>
      </tr>
      <tr>
      <th className="text-center" scope="col">User-ID</th>
      <td className="text-center">{val4}</td >
      </tr>
      <tr>
      <th className="text-center" scope="col">User-Name</th>
      <td className="text-center">{val1}</td>
      </tr>
      <tr>
      <th className="text-center" scope="col">Email</th>
      <td className="text-center">{val2}</td>
      </tr>
      <tr>
      <th className="text-center" scope="col">Account created on</th>
      <td className="text-center">{val3}</td>
      </tr>
      <tr>
      <th className="text-center" scope="col">Change-Password</th>
      <td className="text-center"><button className='btn btn-primary' onClick={handleClick}>Change-Password</button></td>
      </tr>
      <tr>
      <th className="text-center" scope="col">Change User-Id</th>
      <td className="text-center"><button className='btn btn-primary' onClick={handlechgid}>Change-User-Id</button></td>
      </tr>
      
  </thead>
  <tbody>
  </tbody>
</table>
</div>




<button type="button" className="btn btn-primary d-none" data-bs-toggle="modal"  ref={ref}  data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Change-Passowrd</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
      <form className='my-4'>
  <div className="mb-6  ">
    <label htmlFor="title" className="form-label" >old-Password</label>
    <input type="text" className="form-control" id="old"  name="old" aria-describedby="emailHelp" onChange={onchange}  required />
    
  <div className="mb-3">
    <label htmlFor="description" className="form-label" >New_password</label>
    <input type="text" className="form-control" id="new"  name="new" onChange={onchange} required />
  </div>
  </div>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refclose}>Close</button>
        <button type="button"  className="btn btn-primary" onClick={handlechgpass} >Change-Password</button>
      </div>
    </div>
  </div>
</div>






    </>
  )
}

export default Userdetail