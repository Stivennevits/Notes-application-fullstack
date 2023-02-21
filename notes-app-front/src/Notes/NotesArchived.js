import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function NotesArchived() {

  const [notes, setNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const result = await axios.get("http://localhost:8080/notes");
    setNotes(result.data);
    setArchivedNotes(result.data.filter((note) => note.archived));
  };

  const deleteNote = async (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      await axios.delete(`http://localhost:8080/note/${id}`);
      loadNotes();
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h2>My Archived Notes</h2>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">last_edited</th>
              <th scope="col">Archived</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
            
            archivedNotes.map((note, index) => (
              <tr key={note.id_note}>
                <th scope="row">{index + 1}</th>
                <td>{note.title}</td>
                <td>{note.content}</td>
                <td>{note.last_edited}</td>
                <input type={"checkbox"} checked={note.archived}/>
                
                  
                
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewnote/${note.id_note}`}
                  >
                    View
                  </Link>

                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editnote/${note.id_note}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteNote(note.id_note)}
                  >
                    Delet
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
