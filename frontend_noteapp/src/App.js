import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import AllNotes from "./pages/AllNotes";
import NewNote from "./pages/NewNote";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import NoteDetail from "./pages/NoteDetail";
import EditNote from "./pages/EditNote";
import NotesRootLayout from "./pages/NotesRoot";

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
          { index: true, element: <AllNotes /> },
          { path: ':id', element: <NoteDetail /> },
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
