import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
const DialogComponent = ({ open, onClose, selectedDate, setEvents, selectedEvent }) => {

  const [title, setTitle] = useState('');

  // Save edits to event
  const handleSaveEvent = () => {

    if (selectedEvent) {
      if (title.length > 0 ){
        setEvents((prevEvents) =>
        prevEvents.map((event) => (event.id === selectedEvent.id ? { ...event, title } : event))
      );
      }

    } else {
      setEvents(prevEvents => {
        const updatedEvents = [...prevEvents, {
          title,
          start: selectedDate.start,
          end: selectedDate.end,
          id: new Date().getTime()
        }];

        localStorage.setItem('my-events', JSON.stringify(updatedEvents)); // Update local storage here
        return updatedEvents;
      });
    }
    setTitle('');
    onClose();
  };

  // Delete Events
  const handleDeleteEvent = () => {

    setEvents(prevEvents => {
      const filteredEvents = prevEvents.filter(event => event.id !== selectedEvent.id);
      localStorage.setItem('my-events', JSON.stringify(filteredEvents)); // Update local storage here
      return filteredEvents;
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{selectedEvent ? "Edit Event" : "Add New Event"}</DialogTitle>

      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Event Title"
          type="text"
          fullWidth
          variant="standard"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </DialogContent>
      <DialogActions>

        <Button onClick={onClose} >Cancel</Button>
        <Button onClick={() => handleSaveEvent()}>Save</Button>
        {selectedEvent && <Button onClick={() => handleDeleteEvent()} color="secondary">Delete</Button>}
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
