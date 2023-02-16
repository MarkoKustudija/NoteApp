import { useReducer } from "react";
import NoteContext from "./note-context";

const defaultNoteState = {
  notes: [],
};

const noteReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingNoteIndex = state.notes.findIndex(
      (note) => note.id === action.note.id
    );
    const existingNote = state.notes[existingNoteIndex];

    let updatedNotes;

    if (existingNote) {
      const updatedNote = {
        ...existingNote,
        amount: existingNote.amount + action.note.amount,
      };
      updatedNotes = [...state.notes];
      updatedNotes[existingNoteIndex] = updatedNote;
    } else {
      updatedNotes = state.notes.concat(action.note);
    }

    return {
      notes: updatedNotes,
    };
  }
};

const NoteProvider = (props) => {
  const [noteState, dispatchCartAction] = useReducer(
    noteReducer,
    defaultNoteState
  );

  const addNote = (note) => {
    dispatchCartAction({ type: "ADD", note: note }); // can be anything but usually is an Object
  };

  const noteContext = {
    notes: noteState.notes,
    updateNote: addNote,
  };

  return (
    <NoteContext.Provider value={noteContext}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
