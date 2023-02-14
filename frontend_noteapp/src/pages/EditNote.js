
// import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import UpdateNote from '../components/notes/UpdateNote';
// import useHttp from '../hooks/use-http';
// import { editNote } from '../lib/api';

const EditNote = () => {

    // const {sendRequest, status} = useHttp(editNote);
    // const history = useHistory();

    // useEffect(() => {
    //     if(status === 'completed'){
    //         history.push('/notes')
    //     }
    // },[status, history])

    // const editNoteHandler = (noteData) => {
    //     sendRequest(noteData);
    //     console.log(noteData);
    // }

    return ( 
        // <UpdateNote isLoading = {status === 'pending'}  onEdit  = {editNoteHandler}/>
        <UpdateNote />
     );
}
 
export default EditNote;