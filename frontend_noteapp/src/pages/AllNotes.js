import { Link } from "react-router-dom";


const DUMMY_NOTES = [
  {
    id: 'e1',
    title: 'Some note',
    content: 'aaaa',
  },
  {
    id: 'e2',
    title: 'Another note',
    content: 'bbbbb',
  },
];
const AllNotes = (props) => {


  // const data = useLoaderData();
  // const events = data.events;

  // return <NoteList events={events} />;

  return (
    <>
      <h1>Notes Page</h1>
      <ul>
        {DUMMY_NOTES.map((note) => (
          <li key={note.id}>
            <Link to={note.id}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllNotes;
