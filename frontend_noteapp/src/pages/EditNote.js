

import { useRouteLoaderData } from 'react-router-dom';
import NoteForm from '../components/notes/NoteForm';

const EditNote = () => {

    const data = useRouteLoaderData('note-detail');

    return ( 
        <NoteForm method="put" note = {data.note}/>
     );
}
 
export default EditNote;