import { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import NoteList from "../components/notes/NoteList";

const AllNotes = () => {

  const data = useLoaderData();
  // const {notes} = useLoaderData();

  
  return(
    <NoteList notes = {data} />
  // <>
  //   <Suspense fallback={<p style={{ textAlign: "center" }}> Loading...</p>}>
  //     <Await resolve={notes}>
  //       {(loadedNotes) => <NoteList notes={loadedNotes} />}
  //     </Await>
  //   </Suspense>
  // </>
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

// export async function loadNotes() {
//   const response = await fetch("http://localhost:8080/notes");

//   if (!response.ok) {
//     throw json(
//       { message: "Could not fetch notes." },
//       {
//         status: 500,
//       }
//     );
//   } else {
//     const resData = await response.json();
//     return resData.notes;
//     // return response;
//   }
// }

// export function loader() {
//   return defer({
//     events: loadNotes(),
//   });
// }
