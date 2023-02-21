package com.ensolverChallenge.NotesAppbackend.exception;

public class NoteNotFoundException extends RuntimeException {
	
	public NoteNotFoundException(Long id) {
		super("Could not found notewith id " + id );
	}

}
