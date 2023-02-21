import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewNote() {

    const [note, setNote] = useState({
        title:"",
        content:"",
        archived: false
    })
    

    const {id}= useParams();

    useEffect(()=>{
        loadNotes()
    }, [])

    const loadNotes = async () => {
        const result = await axios.get(`http://localhost:8080/note/${id}`)
        setNote(result.data)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4 '>Note Details</h2>

                    <div className='card'>
                        <div className='card-header'>
                            Details Notes id: {note.id_note}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b> Title: </b>
                                    {note.title}
                                </li>

                                <li className='list-group-item'>
                                    <b> Content: </b>
                                    {note.content}
                                </li>

                                <li className='list-group-item'>
                                    <b> Archived: </b>
                                    <input 
                                        type={"checkbox"}
                                        
                                        placeholder='Enter the New Content'
                                        name='archived'
                                        
                                        checked={note.archived}
                        
                                         />

                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to={"/"}>Back to Home</Link>
            </div>
        </div>
    </div>
  )
}
