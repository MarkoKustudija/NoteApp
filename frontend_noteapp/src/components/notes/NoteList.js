import { Fragment, useEffect} from "react";
import { useHistory } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { deleteNote } from "../../lib/api";
import Note from "./Note";

const NoteList = (props) => {

  const history = useHistory();

  const { sendRequest, status } = useHttp(deleteNote);

  const deleteNoteHandler = (noteId) => {
    sendRequest(noteId);
  };

  const editNoteHandler = (noteId) => {
    history.push(`/update-note/${noteId}`);

    console.log("edited", noteId);
  };

  useEffect(() => {
    if (status === "completed") {
      history.push("/home");
    }
    // if (status === "pending") {
    //   history.push("/notes");
    // }
  }, [status, history]);

  return (
    <Fragment>
      <ul>
        {props.notes.map((note, index) => {
          return (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              onDelete={deleteNoteHandler}
              onEdit={editNoteHandler}
            />
          );
        })}
      </ul>
    </Fragment>
  );
};

export default NoteList;
