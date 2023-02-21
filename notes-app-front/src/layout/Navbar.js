import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>Ensolvers Notes App</Link>
                    
                    <Link className='btn btn-outline-light' to="/archived">My Archived Notes</Link>

                    <Link className='btn btn-outline-light' to="/addnote">Add note</Link>

                    
            </div>
        </nav>


    </div>
  )
}
