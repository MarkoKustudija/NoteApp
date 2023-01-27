import { Fragment, useEffect } from "react";
import useHttp from "../hooks/use-http";
import { getAllNotes} from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoNotesFound from "../components/notes/NoNotesFound";
import NoteList from "../components/notes/NoteList";

const AllNotes = (props) => {

  const {
    sendRequest,
    status,
    data: loadedNotes,
    error,
  } = useHttp(getAllNotes, true);



  useEffect(() => {
    sendRequest();
  }, [sendRequest]);


  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }



  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedNotes || loadedNotes.length === 0)) {
    return <NoNotesFound />;
  }

  return (
    <Fragment>
      <NoteList notes={loadedNotes} />
    </Fragment>
  );
};

export default AllNotes;
