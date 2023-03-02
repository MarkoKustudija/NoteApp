import React, { Suspense } from "react";
import {
  Await,
  defer,
  json,
  redirect,
  useLoaderData,
  useRouteLoaderData,
} from "react-router-dom";
import NoteItem from "../components/notes/NoteItem";
// import NoteList from "../components/notes/NoteList";

function NoteDetail() {

  // const data = useRouteLoaderData('note-detail');
  // const note = data.note;

  // const { note } = useRouteLoaderData("note-detail");

  const data = useLoaderData();

  return (
    <NoteItem note = {data.note}/>
    // <>
    //   <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
    //     <Await resolve={note}>
    //       {(loadedNote) => <NoteItem note={loadedNote} />}
    //     </Await>
    //   </Suspense>

    //   <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
    //     <Await resolve={notes}>
    //       {(loadedNotes) => <NoteList notes = {loadedNotes} />}
    //     </Await>
    //   </Suspense>
    // </>

  );
}

export default NoteDetail;

export async function loader({request, params}) {
  const id = params.id;

  const response = await fetch('http://localhost:8080/notes/' + id);

  if (!response.ok) {
    throw json({message: 'Could not fetch details for selected note.'}, {
      status: 500
    })
  } else {
    return response;
  }
}

// export async function loadNote(id) {
//   const response = await fetch("http://localhost:8080/notes/" + id);

//   if (!response.ok) {
//     throw json(
//       { message: "Could not fetch details for selected note." },
//       {
//         status: 500,
//       }
//     );
//   } else {
//     const resData = await response.json();
//     return resData.note;
//     // return response;
//   }
// }

// async function loadNotes() {
//   const response = await fetch('http://localhost:8080/notes');

//   if (!response.ok) {
//     throw json(
//       { message: 'Could not fetch notes.' },
//       {
//         status: 500,
//       }
//     );

//   } else {
//     const resData = await response.json();
//     return resData.notes;
//   }
// }

// export async function loader({ request, params }) {

//   const id = params.id;

//   // defer() is a good option if we have some slow backend!
//   return defer({
//     event: await loadNote(id),
//     events: loadNotes(),
//   });
// }


export async function action({ params, request }) {
  const id = params.id;
  const response = await fetch("http://localhost:8080/notes/" + id, {
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
