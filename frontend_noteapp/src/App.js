import { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const addNoteHandler = (newNote) => {
    console.log("added");
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
    console.log("deleted");
  };

  return (
    <div>
      <Header />
      <NoteForm onAdd={addNoteHandler} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;
