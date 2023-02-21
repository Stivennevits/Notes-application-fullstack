package com.ensolverChallenge.NotesAppbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ensolverChallenge.NotesAppbackend.model.Note;

public interface NoteRepository extends JpaRepository<Note, Long > {
	
}
