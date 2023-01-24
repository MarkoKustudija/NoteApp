import { useEffect, useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
// import "./App.css";
import Header from "./components/layout/Header";
import NoteForm from "./components/notes/NoteForm";
import NoteList from "./components/notes/NoteList";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import NoNotesFound from "./components/notes/NoNotesFound";

function App() {
  const [notes, setNotes] = useState(
    !localStorage.getItem("key") ? [] : JSON.parse(localStorage.getItem("key"))
  );

  const [isThereNotes, setIsThereNotes] = useState(
    !localStorage.getItem("isThereNotes")
      ? false
      : JSON.parse(localStorage.getItem("isThereNotes"))
  );

  const [isNoteDeleted, setIsNoteDeleted] = useState(
    !localStorage.getItem("delete")
      ? false
      : JSON.parse(localStorage.getItem("delete"))
  );

  const [isEntering, setIsEntering] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (isEntering) {
      history.push("/notes");
    }

    localStorage.setItem("key", JSON.stringify(notes));
    localStorage.setItem("isThereNotes", JSON.stringify(isThereNotes));
    localStorage.setItem("delete", JSON.stringify(isNoteDeleted));
  }, [isEntering, history, notes, isThereNotes, isNoteDeleted]);

  // DELETE 
  useEffect(() => {
    if (isNoteDeleted) {
      localStorage.removeItem("delete");
    }
    if(notes < 1){
      localStorage.removeItem('isThereNotes');
    }

  }, [isNoteDeleted, notes]);

  ////////////////////////////////

  const addNoteHandler = (newNote) => {
    console.log("added");
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
    setIsThereNotes(true);
    setIsEntering(true);
    setIsNoteDeleted(false);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
    setIsNoteDeleted(true);
  };

  // localStorage.clear();

  return (
    <Header>
      <Switch>
        {!isThereNotes && (
          <Route path="/home" exact>
            <NoNotesFound />
          </Route>
        )}

        {(isNoteDeleted && notes < 1) && (
          <Route path="/home" exact>
            <NoNotesFound />
          </Route>
        )}

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

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Header>
  );
}

export default App;
