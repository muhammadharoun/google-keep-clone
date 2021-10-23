import React,{useState} from 'react';
import {Card ,CardContent,Typography,Grid,CardActions,Button} from '@mui/material';
import Navbar from './components/Navbar'
import NoteForm from './components/NoteForm'
import './App.css'


export default function App() {
  const [Notes, setNotes] = useState([])
  return (
      <Grid container spacing={2}>
        <Navbar />
        <Grid item xs={6}>
          <NoteForm Notes={Notes} setNotes={setNotes} />
        </Grid>
        <Grid item xs={4}>
          {Notes.map((note)=> {
            return (
              <Card sx={{ minWidth: 275 }}>
              <CardContent>

                <Typography variant="h5" component="div">
                {note.title}
                </Typography>

                <Typography variant="body2">
                {note.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">delete</Button>
              </CardActions>
            </Card>
        
            )
          })}
        </Grid>
        <Grid item xs={8}>

        </Grid>
      </Grid>
  );
}
