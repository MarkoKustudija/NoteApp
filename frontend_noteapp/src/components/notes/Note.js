import classes from "./Note.module.css";

const Note = (props) => {
  return (
    <div className={classes.note}>
      <h1> {props.title}</h1>
      <p> {props.content}</p>
      <button onClick={() => props.onDelete(props.id)}> Delete </button>
    </div>
  );
};

export default Note;
