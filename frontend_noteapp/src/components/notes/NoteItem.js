import { Link, useSubmit } from "react-router-dom";
import classes from "./NoteItem.module.css";

const NoteItem = (props) => {

  const submit = useSubmit();

  function deleteHandler() {

    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <div className={classes.note}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={deleteHandler}>Delete</button>
      </menu>
    </div>
  );
};

export default NoteItem;
