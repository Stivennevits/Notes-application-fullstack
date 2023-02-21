import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddNote from './Notes/AddNote';
import EditNotes from './Notes/EditNotes';
import ViewNote from './Notes/ViewNote';
import NotesArchived from './Notes/NotesArchived';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/addnote" element={<AddNote/>} />
            <Route exact path="/editnote/:id" element={<EditNotes />} />
            <Route exact path="/viewnote/:id" element={<ViewNote />} />
            <Route exact path="/archived/" element={<NotesArchived/>} />
          </Routes>
        
      </Router>

    </div>
  );
}

export default App;
