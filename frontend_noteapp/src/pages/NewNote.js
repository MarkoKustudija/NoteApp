
import { json, redirect } from "react-router-dom";
import NoteForm from "../components/notes/NoteForm";


const NewNote = () => {


    return  <NoteForm  />
}
 
export default NewNote;

export async function action({ request, params }) {
    const data = await request.formData();
  
    const noteData = {
      title: data.get('title'),
      content: data.get('content')
    };
  
    const response = await fetch('http://localhost:8080/notes', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(noteData),
    });
  
    if (!response.ok) {
      throw json({ message: 'Could not save note.' }, { status: 500 });
    }
  
    return redirect('/notes');
}