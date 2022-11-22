import React, { useState } from 'react'
import { useContext } from 'react/cjs/react.development'
import NoteContext from '../context/notes/NoteContext'
import Note from './Note'
import DisplayComponent from './DisplayComponent'
import BtnComponent from './BtnComponent'
import { useRef } from 'react'

const Home = (props) => {
  const val = useContext(NoteContext);
  const { addnote, notes } = val;

  const [note, setNote] = useState({ title: " ", description: " ", tag: " " });
  const addsub = ((e) => {
    e.preventDefault();
    addnote(note.title, note.description, note.tag);
    //setNote(note.title,note.description,note.tag)
    
    close.current.click();
  })
  const onchange = ((e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  })




const [time,setTime]=useState({ms:0,s:0,m:0,h:0});
const [interv,setInterv]=useState();
const [status,setStatus]=useState(0);
const start=()=>{
  run()
  setStatus(1);
  setInterv(setInterval(run,10))
}
var updatedMs=time.ms ,updatedS=time.s,updatedM=time.m,updatedH=time.h;
const run=()=>{
  if(updatedM === 60){
    updatedH++;
    updatedS=0;

  }
  if(updatedMs === 100)
  {
    updatedS++;
    updatedMs=0;
  }
  updatedMs++;
  return setTime({ms:updatedMs,s:updatedS,m:updatedM,h:updatedH})
}


const stop=()=>{
  clearInterval(interv);
  setStatus(1);
  re.current.click();
}


const reset=()=>{
  clearInterval(interv);
  setStatus(0);
  setTime({ms:0,s:0,m:0,h:0})
}

const re=useRef(null)
const close=useRef(null)


  return (

    <>

    <h2 style={{textAlign:'center'}}>Click On Start button to start the timer and save your notes</h2>
      <div className='main-section'>
        <div className='clock-holder'>
          <div className='stopwatch'>
            <DisplayComponent time={time}/>
            <BtnComponent start={start} status={status}  stop={stop} reset={reset}/>
          </div>
        </div>
      </div>



      <div className='disnote' style={{ width: "100%" }}>
        <h2 className='text-center'>Your Notes- {notes.length}</h2>
        {localStorage.setItem('len', notes.length)}
        <Note showAlert={props.showAlert} time={time}></Note>
      </div>


    
         

      <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={re}  data-bs-target="#addnote">
  Launch demo modal
</button>

<div className="modal fade" id="addnote" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
      
        <h5 className="modal-title" id="exampleModalLabel">ADD-Your-Notes </h5><br/>

        <b><p style={{textAlign:'center',marginLeft:'25px'}}>{time.h } :{ time.m }:{ time.s }:{ time.ms}</p></b> 
            
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
      <form className='my-4'>
  <div className="mb-6  ">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle" name="title" aria-describedby="emailHelp"  onChange={onchange} placeholder=" should extend a length of 5" />
    
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name="description" onChange={onchange} placeholder=" should extend a length of 5" />
    
  </div>

  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control"  id="tag"   name="tag"  onChange={onchange} />
    
  </div>
  </div>
</form>

      </div>
      <div className="modal-footer">
        <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal" ref={close}>Close</button>
        <button type="submit"  className="btn btn-primary" onClick={addsub} >ADD-NOTE</button>
      </div>
    </div>
  </div>
</div>
     



    </>



  )
}
export default Home  
