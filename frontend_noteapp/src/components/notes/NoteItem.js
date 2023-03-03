
import { Link, useSubmit } from "react-router-dom";
import classes from "./NoteItem.module.css";

const NoteItem = ({ note }) => {
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.item}>
      <h2>Title: {note.title}</h2>
      <h2> Content: {note.content}</h2>
      <menu className={classes.actions}>
        {/* <Link to=":id/edit">Edit</Link> */}
        <Link to="edit">
          <h3>Edit</h3>
        </Link>
        <button onClick={startDeleteHandler}>
          <h3>Delete</h3>
        </button>
      </menu>
      {/* <div>
        <Link to="..">
          <h3>Back</h3>
        </Link>
      </div> */}
    </article>
  );
};

export default NoteItem;
