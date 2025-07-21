import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export interface Note {
  id: number;
  title: string;
  text: string;
}

const CrudApp: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Grocery List Item",
      text: "Buy more coffee.",
    },
    {
      id: 2,
      title: "Personal Goal",
      text: "Finish reading the book.",
    },
  ]);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleSubmit = () => {
    if (!title || !text) return;

    if (editingId !== null) {
      setNotes((prev) =>
        prev.map((note) =>
          note.id === editingId ? { ...note, title, text } : note
        )
      );
      setEditingId(null);
    } else {
      const newNote: Note = {
        id: notes.length ? Math.max(...notes.map((n) => n.id)) + 1 : 1,
        title,
        text,
      };
      setNotes((prev) => [...prev, newNote]);
    }
    setTitle("");
    setText("");
  };

  const handleEdit = (note: Note) => {
    setEditingId(note.id);
    setTitle(note.title);
    setText(note.text);
  };

  const handleDelete = (id: number) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <Container maxWidth='md'>
      <Box sx={{ textAlign: "center", my: 4 }}>
        <StickyNote2Icon fontSize='large' color='primary' />
        <Typography variant='h4' gutterBottom>
          Notes CRUD
        </Typography>

        <Paper sx={{ p: 2, mb: 4 }}>
          <TextField
            fullWidth
            margin='normal'
            label='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            fullWidth
            margin='normal'
            label='Text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            multiline
            rows={3}
          />
          <Button
            variant='contained'
            color='primary'
            onClick={handleSubmit}
            sx={{ mt: 2 }}>
            {editingId !== null ? "Update Note" : "Add Note"}
          </Button>
        </Paper>

        <List>
          {notes.map((note) => (
            <ListItem key={note.id} sx={{ mb: 1 }} component={Paper}>
              <ListItemText primary={note.title} secondary={note.text} />
              <ListItemSecondaryAction>
                <IconButton edge='end' onClick={() => handleEdit(note)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge='end' onClick={() => handleDelete(note.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default CrudApp;
