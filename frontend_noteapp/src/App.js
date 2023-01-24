import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import "./App.css";
import Header from "./components/layout/Header";
import NoteForm from "./components/notes/NoteForm";
import NoteList from "./components/notes/NoteList";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

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
    
      <Header>
        <Switch>


        <Route path="/" exact>
            <Redirect to="/home" />
          </Route>

          <Route path="/home" exact>
            <Home />
          </Route>

        
          <Route path="/new-note" exact>
            <NoteForm onAdd={addNoteHandler} />
          </Route>

          <Route path="/notes" exact>
            <NoteList notes={notes} onDelete={deleteNote} />
          </Route>

          <Route path="*" >
            <NotFound />
          </Route>

        </Switch>
      </Header>
  );
}

export default App;
