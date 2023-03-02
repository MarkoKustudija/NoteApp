import { Fragment, useEffect} from "react";
import { redirect, useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { deleteNote } from "../../lib/api";
import Note from "./Note";

const NoteList = (props) => {

  // const history = useHistory();
   const navigate = useNavigate();
  

  const { sendRequest, status } = useHttp(deleteNote);

  const deleteNoteHandler = (noteId) => {
    sendRequest(noteId);
  };

  const editNoteHandler = (noteId) => {
    navigate(`/update-note/${noteId}`);
  };

  useEffect(() => {
    if (status === "completed") {
      navigate("/home");
    }
    // if (status === "pending") {
    //   history.push("/notes");
    // }
  }, [status, navigate]);

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
