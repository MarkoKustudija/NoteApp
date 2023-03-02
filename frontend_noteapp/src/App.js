import { Navigate, Redirect, Route, Routes, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import AllNotes from "./pages/AllNotes";
import NewNote from "./pages/NewNote";
// import EditNote from './pages/EditNote';
import UpdateNote from "./components/notes/UpdateNote";
import NoteProvider from "./store/NoteProvider";
// import EditNote from "./pages/EditNote";

function App() {
  // const [notes, setNotes] = useState(
  //   !localStorage.getItem("key") ? [] : JSON.parse(localStorage.getItem("key"))
  // );

  // const [isThereNotes, setIsThereNotes] = useState(
  //   !localStorage.getItem("isThereNotes")
  //     ? false
  //     : JSON.parse(localStorage.getItem("isThereNotes"))
  // );

  // const [isNoteDeleted, setIsNoteDeleted] = useState(
  //   !localStorage.getItem("delete")
  //     ? false
  //     : JSON.parse(localStorage.getItem("delete"))
  // );

  // const [isEntering, setIsEntering] = useState(false);

  // const history = useHistory();

  // useEffect(() => {
  //   if (isEntering) {
  //     history.push("/notes");
  //   }

  //   localStorage.setItem("key", JSON.stringify(notes));
  //   localStorage.setItem("isThereNotes", JSON.stringify(isThereNotes));
  //   localStorage.setItem("delete", JSON.stringify(isNoteDeleted));
  // }, [isEntering, history, notes, isThereNotes, isNoteDeleted]);

  // // DELETE
  // useEffect(() => {
  //   if (isNoteDeleted) {
  //     localStorage.removeItem("delete");
  //   }
  //   if (notes < 1) {
  //     localStorage.removeItem("isThereNotes");
  //   }
  // }, [isNoteDeleted, notes]);

  // ////////////////////////////////

  // const addNoteHandler = (newNote) => {
  //   console.log("added");
  //   setNotes((prevNote) => {
  //     return [...prevNote, newNote];
  //   });
  //   setIsThereNotes(true);
  //   setIsEntering(true);
  //   setIsNoteDeleted(false);
  // };

  // const deleteNote = (id) => {
  //   setNotes((prevNotes) => {
  //     return prevNotes.filter((item, index) => {
  //       return index !== id;
  //     });
  //   });
  //   setIsNoteDeleted(true);
  // };

  // localStorage.clear();

  return (
    <NoteProvider>
      <Header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/notes" element={<AllNotes />} />
          <Route path="/new-note" element={<NewNote />} />
          <Route path="/update-note/:id" element={<UpdateNote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Header>
    </NoteProvider>
  );
}

export default App;
