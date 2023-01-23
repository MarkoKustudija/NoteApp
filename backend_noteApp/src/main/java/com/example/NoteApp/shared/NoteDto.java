package com.example.NoteApp.shared;


import com.example.NoteApp.model.Note;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.function.LongFunction;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NoteDto {

    private Long id;
    private String title;
    private String content;

    public NoteDto(Note n) {
        this.id = n.getId();
        this.title = n.getTitle();
        this.content = n.getContent();
    }
}
