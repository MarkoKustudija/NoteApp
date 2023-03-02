import { Link, useNavigate, useSubmit } from "react-router-dom";
import classes from "./NoteItem.module.css";

const NoteItem = (note) => {

  const submit = useSubmit();

  // const navigate = useNavigate();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure you want to delete this note?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  // function editHandler() {
  //   navigate('/notes/new')

  // }

  return (
    <article className={classes.note}>
      <h1>Title: {note.title}</h1>
      <p> Content: {note.content}</p>
      <menu className={classes.actions}>
        <Link to=":id/edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
  
};

export default NoteItem;
