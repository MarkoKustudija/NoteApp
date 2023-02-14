import classes from "./Note.module.css";

const Note = (props) => {
  return (
    <div className={classes.note}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.onDelete(props.id)}> Delete </button>
      <button onClick={() => props.onEdit(props.id)}> Edit </button>
    </div>
  );
};

export default Note;
