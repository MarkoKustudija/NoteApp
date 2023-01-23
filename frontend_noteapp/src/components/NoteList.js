import { Fragment } from "react";
import Note from "./Note";

const NoteList = (props) => {
  return (
    <Fragment>
      <ul>
        {props.notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={props.onDelete}
            />
          );
        })}
      </ul>
    </Fragment>
  );
};

export default NoteList;
