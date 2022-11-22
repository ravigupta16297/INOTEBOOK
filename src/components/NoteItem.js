import React from 'react'
import { useContext } from 'react/cjs/react.development';
import NoteContext from '../context/notes/NoteContext';


const NoteItem=(props)=>{
    const {note,handleModal,showAlert}=props;
    const val=useContext(NoteContext)
    const {delNote}=val;
    const not=note.title
    
 
   
    return(
        <>
       
        <div className='col-md-3'>
       <strong><p style={{fontSize:"11px",textAlign:"center"}}> {note.date}</p></strong> 
<div className="card my-3">
  <div className="card-body">
 
    <div className='d-inline-flex'>
      
    <strong><p className="card-title">{not.charAt(0).toUpperCase()+note.title.slice(1)}</p></strong>
    <i className="fas fa-trash-alt mx-3 my-1" onClick={()=>{delNote(note._id);(showAlert("Note deleted Successfully","success"))}} ></i>
    <i className="far fa-edit my-1" onClick={()=>{handleModal(note);}}></i>
    </div>
    <p className="card-text">{note.description}</p>
    
    
  </div>
</div>
</div>

    
    </>
    )};
export default NoteItem 