//import react from "react";
//import { useState } from "react";
//import { useState } from "react/cjs/react.development";
import { useState } from "react/cjs/react.development";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
  const host="http://localhost:5000";
  const note = []
  const [notes, setNote] = useState(note);
  const fetchAllnote = (async() => {
    // eslint-disable-next-line 
     const response = await fetch(`${host}/api/note/fetchallnotes`, {
       method: 'GET', // 
       headers: {
           'Content-Type': 'application/json',
           'auth-token':localStorage.getItem('token')
   },
   });
   const json=await response.json();
   //console.log(json)
   setNote(json);
  })

  

  const addnote = (async(title, description, tag) => {
   // eslint-disable-next-line 
    const response = await fetch(`${host}/api/note/addnote`, {
      method: 'POST', 
      headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
  },
      body: JSON.stringify({title,description,tag})
  });
 
    const note = [{
      "user":localStorage.getItem('uid'),
      "title": title,
      "description": description,
      "tag": tag,
    }]
    //console.log(notes)
    setNote(notes.concat(note));
  })

  const delNote = (async(id) => {
    console.log("deleting not with id:" + id)
    // eslint-disable-next-line 
    const response = await fetch(`${host}/api/note/delete/${id}`, {
      method: 'DELETE', // 
      headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
  },
  });

    const not = notes.filter((note) => { return note._id !== id })
    setNote(not);
  })

  const editNote = async(id, title, description, tag) => {
    // eslint-disable-next-line 
    const response = await fetch(`${host}/api/note/update/${id}`, {
      method: 'PUT', // 
      headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
  },
      body: JSON.stringify({title,description,tag})
  });
   
  let newNote=JSON.parse(JSON.stringify(notes))
    
    //client update logic
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        newNote[index].title = title
        newNote[index].description = description
        newNote[index].tag = tag
        break;
      }
      
        
    }
    setNote(newNote);
  }

  return (
    <>
      <NoteContext.Provider value={{ notes, addnote, delNote, editNote ,fetchAllnote}}>
        {props.children}
      </NoteContext.Provider>
    </>
  )
}
export default NoteState;
