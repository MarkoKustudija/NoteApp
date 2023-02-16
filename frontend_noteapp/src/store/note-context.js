import React from "react";

const NoteContext = React.createContext({

    notes: [],
    updateNote : (note) => {}



});

export default NoteContext;
