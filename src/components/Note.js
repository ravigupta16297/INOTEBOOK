import React, { useContext, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import NoteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';






const Note=(props)=>{
    const val =useContext(NoteContext);
    const {notes,fetchAllnote,editNote}=val;
    
    let history=useHistory();

    useEffect(()=>{
      if(localStorage.getItem('token'))
      {
        
        fetchAllnote()
      }
      else{
        history.push('/login')  
      }
// eslint-disable-next-line 
    },[])
     
    const [note,setNote]=useState({id:" ",etitle:" ",edescription:" ",etag:" "});

    const handleModal=((currentNote)=>{
     ref.current.click()
      setNote({id:currentNote._id,etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag});
     // console.log(currentNote.title);
      
    })
  
    

    const onChange=((e)=>{

        setNote({...note, [e.target.name]:e.target.value})
    })
    
    const handleClick=((e)=>{
       refclose.current.click()
       
       editNote(note.id,note.etitle,note.edescription,note.etag)
       props.showAlert("Note updated successfully","success")
    })
    const ref=useRef(null)
    const refclose=useRef(null)
    
    
    return( 
<>
<button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={ref}  data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Update-Your-Notes</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
      <form className='my-4'>
  <div className="mb-6  ">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle" value={note.etitle} name="etitle" aria-describedby="emailHelp"  onChange={onChange} required />
    
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="edescription" value={note.edescription} name="edescription" onChange={onChange} required />
    
  </div>

  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control"  id="etag"  value={note.etag} name="etag"  onChange={onChange} required/>
    
  </div>
  </div>
</form>

      </div>
      <div className="modal-footer">
        <button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button"  className="btn btn-primary" onClick={handleClick}>update-note</button>
      </div>
    </div>
  </div>
</div>
        
    <div className='row my-3'>
     <div className='zeronote'><strong>{notes.length === 0 && "No Notes to display"}</strong></div>

     {notes.map((notes)=>{
       
           return <NoteItem  key={Math.random()} note={notes}  handleModal={handleModal} showAlert={props.showAlert} />
     })}
      
    </div>
    </>
    )};
export default Note ;