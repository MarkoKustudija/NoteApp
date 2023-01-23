package com.example.server.shared;

import com.example.server.model.Note;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
