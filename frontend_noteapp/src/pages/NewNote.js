import { useEffect } from "react";
import { redirect, useHistory, useNavigate } from "react-router-dom";
import NoteForm from "../components/notes/NoteForm";
import useHttp from "../hooks/use-http";
import { addNote } from "../lib/api";


const NewNote = () => {

    const {sendRequest, status} = useHttp(addNote);
    // const history = useHistory();
    const navigate = useNavigate();

    useEffect(() => {
        if(status === 'completed'){
            navigate('/notes')
        }
    },[status, navigate])

    const addNoteHandler = (noteData) => {
        sendRequest(noteData);
    }


    return  <NoteForm isLoading = {status === 'pending'}  onAdd={addNoteHandler} />
}
 
export default NewNote;