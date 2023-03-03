import { useEffect } from "react";
import { Link, useSubmit } from "react-router-dom";
import classes from "./NoteItem.module.css";

const NoteItem = ({note}) => {

  

  useEffect(() => {
    console.log({"title: " : note.title, "content" : note.content});
    //  return note;
     
  })
  


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
    <article className={classes.item}>
      <h2>Title: {note.title}</h2>
      <h2> Content: {note.content}</h2>
      <menu className={classes.actions}>
        {/* <Link to=":id/edit">Edit</Link> */}
        <Link to="edit"><h3>Edit</h3></Link>
        <button onClick={startDeleteHandler}><h3>Delete</h3></button>
      </menu>
    </article>
  );
  
};

export default NoteItem;
