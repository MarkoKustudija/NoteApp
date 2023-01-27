import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NoteForm from "../components/notes/NoteForm";
import useHttp from "../hooks/use-http";
import { addNote } from "../lib/api";


const NewNote = () => {

    const {sendRequest, status} = useHttp(addNote);
    const history = useHistory();

    useEffect(() => {
        if(status === 'completed'){
            history.push('/notes')
        }
    },[status, history])

    const addNoteHandler = (noteData) => {
        sendRequest(noteData);
    }


    return  <NoteForm isLoading = {status === 'pending'}  onAdd={addNoteHandler} />
}
 
export default NewNote;