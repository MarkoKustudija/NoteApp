package com.example.server.controller;

import com.example.server.model.Note;
import com.example.server.service.NoteService;
import com.example.server.shared.NoteDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api/notes")
@CrossOrigin(origins = {"http://localhost:3000"})
public class NoteController {

        @Autowired
        NoteService noteService;

        @PostMapping
        public ResponseEntity<NoteDto> create(@RequestBody NoteDto noteDto){

            Note n = new Note();

            n.setTitle(noteDto.getTitle());
            n.setContent(noteDto.getContent());

            n = noteService.save(n);

            return new ResponseEntity<>(new NoteDto(n), HttpStatus.CREATED);
        }

        @GetMapping(path = "/{id}")
        public ResponseEntity<NoteDto> getOneNote(@PathVariable Long id){

            Note returnValue = noteService.findOne(id);
            return  new ResponseEntity<>(new NoteDto(returnValue), HttpStatus.OK);
        }

        @GetMapping
        public ResponseEntity<List<NoteDto>>getAll(Pageable page){

            Page<Note> notes = noteService.findAll(page);

            List<NoteDto>retValue = new ArrayList<>();

            for(Note n: notes){
                retValue.add(new NoteDto(n));
            }
            return new ResponseEntity<>(retValue, HttpStatus.OK);

        }

        @PutMapping(path = "/{id}")
        public ResponseEntity<NoteDto> update (@RequestBody NoteDto noteDto, @PathVariable Long id){

            Note n = noteService.findOne(id);
            if(n == null){
                return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            n.setTitle(noteDto.getTitle());
            n.setContent(noteDto.getContent());

            Note updateNote = noteService.save(n);

            return  new ResponseEntity<>(new NoteDto(updateNote), HttpStatus.OK);
        }

        @DeleteMapping(path = "/{id}")
        public ResponseEntity<Void> delete (@PathVariable Long id){
            Note n = noteService.findOne(id);

            if(n == null){
                return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

            noteService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }


}
