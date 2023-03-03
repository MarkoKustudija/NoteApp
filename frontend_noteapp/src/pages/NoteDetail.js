
import {
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import NoteItem from "../components/notes/NoteItem";

function NoteDetail() {
  const data = useRouteLoaderData("note-detail");

  data.note = {
    title: data.title,
    content: data.content,
  };

  return (
    <NoteItem note={data.note} />
  );
}

export default NoteDetail;

export async function loader({ request, params }) {
  const id = params.id;

  const response = await fetch("http://localhost:8080/notes/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected note." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const noteId = params.id;
  const response = await fetch("http://localhost:8080/notes/" + noteId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "Could not delete note." },
      {
        status: 500,
      }
    );
  }
  return redirect("/notes");
}
