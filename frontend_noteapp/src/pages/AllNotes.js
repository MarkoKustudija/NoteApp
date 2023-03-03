
import {json, useLoaderData } from "react-router-dom";
import NoteList from "../components/notes/NoteList";

const AllNotes = () => {

  const data = useLoaderData();

  
  return(
    <NoteList notes = {data} />
  )
};

export default AllNotes;

export async function loader() {

  const response = await fetch('http://localhost:8080/notes');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch notes.' },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
