import { Fragment } from "react";
import { Link } from "react-router-dom";
const NoteList = ({ notes }) => {
  return (
    <Fragment>
      <h1> All Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`}>
              <div>
                title={note.title}
                content={note.content}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default NoteList;
