package com.ensolverChallenge.NotesAppbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ensolverChallenge.NotesAppbackend.exception.NoteNotFoundException;
import com.ensolverChallenge.NotesAppbackend.model.Note;
import com.ensolverChallenge.NotesAppbackend.repository.NoteRepository;

@RestController
@CrossOrigin("http://localhost:3000/")
public class NoteController {
	
	@Autowired
	private NoteRepository noteRepository;
	
	@PostMapping("/note")
	Note newNote(@RequestBody Note newNote) {
		return noteRepository.save(newNote);
	}
	
	@GetMapping("/notes")
	List<Note> getAllNotes(){
		return noteRepository.findAll();
	}
	
	@GetMapping("/note/{id}")
	Note getNoteById(@PathVariable Long id) {
		return noteRepository.findById(id)
				.orElseThrow(() -> new NoteNotFoundException(id));
	}
	
	@PutMapping("/note/{id}")
	Note updateNote(@RequestBody Note newNote, @PathVariable Long id) {
		return noteRepository.findById(id)
				.map(note -> {
					note.setTitle(newNote.getTitle());
					note.setContent(newNote.getContent());
					note.setArchived(newNote.isArchived());
					
					return noteRepository.save(note);
				}).orElseThrow(() -> new NoteNotFoundException(id));
	}
	
	@DeleteMapping("/note/{id}")
	String deleteNote(@PathVariable Long id ) {
		if(!noteRepository.existsById(id)) {
			throw new NoteNotFoundException(id);
		}
		noteRepository.deleteById(id);
		
		return "Note with id " + id + " has been deleted success.";
	}
	
	
	
	
	
	
	
	
}
