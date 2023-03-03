import { Form, json, redirect, useActionData, useNavigate, useNavigation } from "react-router-dom";
import classes from "./NoteForm.module.css";

const NoteForm = ({method, note}) => {

  const navigate = useNavigate();
  const data = useActionData();
  const navigation = useNavigation();


  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }

  return (
    <>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <Form method = {method} className={classes.form}>
        <p>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" name="title" required defaultValue={note ? note.title : ''}/>
        </p>

        <p>
          <label htmlFor="content">Content</label>
          <textarea id="content" type="text" name="content" required defaultValue={note ? note.content : ''}/>
        </p>

        <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
      </div>
      </Form>
    </>
  );
};

export default NoteForm;


// Shared function for ADD and EDIT

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const noteData = {
    title: data.get('title'),
    content: data.get('content')
  };

  let url = 'http://localhost:8080/notes';

  if (method === 'PUT') {
    const id = params.id;
    url = 'http://localhost:8080/notes/' + id;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(noteData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not save note.' }, { status: 500 });
  }

  return redirect('/notes');
}