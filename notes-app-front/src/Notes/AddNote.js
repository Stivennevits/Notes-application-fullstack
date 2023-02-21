import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



export default function AddNote() {

    let navigate = useNavigate();

    

    const [note,setNote]=useState({
        title:"",
        content:"",
        archived: false
    })

    const{title,content,archived}= note

    const onInputChange = (e) => {
        
        setNote({ ...note,[e.target.name]:e.target.value})
        
    }

    const onCheckboxChange = (e) => {
        setNote({ ...note, archived: e.target.checked });
      };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/note", note)
        navigate("/")
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4 '>Register New Note</h2>
                
                <form onSubmit={(e)=> {onSubmit(e)}}>  
                <div className='mb-3'>
                    <label htmlFor='title' className='form-label'>
                        Title
                    </label>
                    <input 
                        type={"text"}
                        className="form-control"
                        placeholder='Enter the New Title'
                        name='title'
                        value={title}
                        onChange={(e)=>onInputChange(e)}
                        />
                </div>   

                <div className='mb-3 ' >
                    <label htmlFor='content' className='form-label'>
                        Content
                    </label>
                    <input 
                        type={"text"}
                        className="form-control "
                        placeholder='Enter the New Content'
                        name='content'
                        value={content}
                        onChange={(e)=>onInputChange(e)}
                        />
                </div>  

                <div className='mb-3 ' >
                    <label htmlFor='archived' className='form-label'>
                    Do you want to archive this note?
                    </label>
                    <input 
                        type={"checkbox"}
                        
                        placeholder='Enter the New Content'
                        name='archived'
                        checked={archived} 
                        onChange={onCheckboxChange}
                        
                        />
                </div> 

            
               

                <button type='submit' className='btn btn-outline-primary'>
                    Submit
                </button>

                <Link className='btn btn-outline-danger mx-2' to="/">
                    Cancel
                </Link>
                </form>
              
            </div>
        </div>
    </div>
  )
}
