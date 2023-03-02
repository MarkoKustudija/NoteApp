import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import AllNotes, { loader as notesLoader } from "./pages/AllNotes";
import NewNote from "./pages/NewNote";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import NoteDetail, { loader as noteDetailLoader, action as deleteNoteAction } from "./pages/NoteDetail";
import EditNote from "./pages/EditNote";
import NotesRootLayout from "./pages/NotesRoot";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { index: true, element: <Home /> },
//       {
//         path: "notes",
//         element: <NotesRootLayout />,
//         children: [
//           {
//             index: true,
//             element: <AllNotes />,
//             loader: notesLoader,
//           },
//           {
//             path: ":id",
//             id: "note-detail",
//             loader: noteDetailLoader,
//             children: [
//               {
//                 index: true,
//                 element: <NoteDetail />,
//                 action: deleteNoteAction,
//               },
//               { path: ":id/edit", element: <EditNote /> },
//             ],
//           },
//           { path: "new", element: <NewNote /> },
//         ],
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'notes',
        element: <NotesRootLayout />,
        children: [
          {
            index: true,
            element: <AllNotes />,
            loader: notesLoader,
          },
          {
            path: ':id',
            element: <NoteDetail />,
            loader: noteDetailLoader,
            action: deleteNoteAction,
          },
          { path: 'new', element: <NewNote /> },
          { path: ':id/edit', element: <EditNote /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
