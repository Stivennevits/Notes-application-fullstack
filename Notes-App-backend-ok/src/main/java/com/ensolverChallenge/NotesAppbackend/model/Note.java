package com.ensolverChallenge.NotesAppbackend.model;
import java.time.LocalDateTime;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;


@Entity
public class Note {
	
	@Id
	@GeneratedValue
	private Long id_note;
	
	private String title;
	
	@Column(columnDefinition = "text")
	private String content;
	
	
	@Column(name = "last_edited", columnDefinition = "DATETIME")
	private LocalDateTime last_edited;
	
	@Column(columnDefinition = "boolean")
	private boolean archived;
	
	public boolean isArchived() {
		return archived;
	}

	public void setArchived(boolean archived) {
		this.archived = archived;
	}
	
	@PreUpdate
	@PrePersist
	public void prePersist() {
		last_edited = LocalDateTime.now();
	}

	public Long getId_note() {
		return id_note;
	}

	public void setId_note(Long id_note) {
		this.id_note = id_note;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public LocalDateTime getLast_edited() {
		return last_edited;
	}

	public void setLast_edited(LocalDateTime last_edited) {
		this.last_edited = last_edited;
	}

	
	
	
}
