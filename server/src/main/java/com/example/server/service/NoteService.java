package com.example.server.service;


import com.example.server.model.Note;
import com.example.server.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class NoteService {

    @Autowired
    NoteRepository noteRepository;


    public Note save(Note n) {
        return noteRepository.save(n);
    }

    public Note findOne(Long id) {
        return noteRepository.findById(id).get();
    }

    public Page<Note> findAll(Pageable page) {
        return noteRepository.findAll(page);
    }

    public void delete(Long id) {
        noteRepository.deleteById(id);
    }
}
