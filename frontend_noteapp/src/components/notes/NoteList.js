import { Fragment } from "react";
import { Link, useLoaderData } from "react-router-dom";
import classes from "./NotesList.module.css";
import NoteItem from "./NoteItem";

const NoteList = ({notes}) => {

  return (
    <div className={classes.notes}>
      <ul className={classes.list}>
        {notes.map((note) => {
          return (
            <li key={note.id} className={classes.item}>
              <Link to={`/notes/${note.id}`}>
                <div>
                  <h2>Title : {note.title}</h2>
                  <h2>Content: {note.content}</h2>
                </div>

                {/* <NoteItem
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  content={note.content}
                /> */}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NoteList;
