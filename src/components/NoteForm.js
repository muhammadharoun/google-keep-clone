import React,{useState} from 'react'
import { TextField,TextareaAutosize,Button } from '@mui/material';
import { GrFormAdd } from 'react-icons/gr';


const NoteForm = ({Notes,setNotes}) => {
    const [title, setTitle] = useState()
    const [description, setdescription] = useState()
    return (
        <form>
            <TextField id="outlined-basic" label="Title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <TextareaAutosize aria-label="Take Note" placeholder="Take Note" minRows={5} value={description} onChange={(e) => setdescription(e.target.value)}/>
            <Button variant="contained" endIcon={<GrFormAdd />} onClick={() => setNotes([...Notes,{title,description}]) }>
            </Button>
        </form>
    )
}

export default NoteForm;