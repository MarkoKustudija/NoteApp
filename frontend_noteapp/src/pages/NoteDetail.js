import React from "react";
import { json, redirect, useLoaderData, useParams } from "react-router-dom";
import NoteItem from "../components/notes/NoteItem";

function NoteDetail() {
  const params = useParams();

  // const data = useLoaderData();
  // const note = data.note;

  return (
    <>
      <h1> Note Detail</h1>
      <p>Note ID: {params.id}</p>
    </>
  );
}

export default NoteDetail;

// export async function loader(id){

//     const response = await fetch('http://localhost:8080/notes/' + id);

//     if (!response.ok) {
//       throw json(
//         { message: 'Could not fetch details for selected note.' },
//         {
//           status: 500,
//         }
//       );
//     } else {
//       const resData = await response.json();
//       return resData.note;
//     }

// }

// export async function action({ params, request }) {
//     const id = params.id;
//     const response = await fetch("http://localhost:8080/notes/" + id, {
//       method: request.method,
//     });

//     if (!response.ok) {
//       throw json(
//         { message: "Could not delete note." },
//         {
//           status: 500,
//         }
//       );
//     }
//     return redirect("/notes");
//   }
