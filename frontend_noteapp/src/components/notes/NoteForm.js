import { useActionData, useNavigate } from "react-router-dom";
import classes from "./NoteForm.module.css";

const NoteForm = (props) => {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  return (
    <>
      {/* {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )} */}
      <form className={classes.form}>
        <p>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" name="title" required />
        </p>

        <p>
          <label htmlFor="content">Content</label>
          <textarea id="content" type="text" name="content" required />
        </p>

        <div className={classes.actions}>
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
          <button>Save</button>
        </div>
      </form>
    </>
  );
};

export default NoteForm;
