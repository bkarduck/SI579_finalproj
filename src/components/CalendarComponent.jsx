import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from "react";
import DialogComponent from './DialogComponent'

// need to run: 
// npm install @mui/material @emotion/react @emotion/styled

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {

  // Define events, use local storage if existing.
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem('my-events');
    if (storedEvents) {
      return JSON.parse(storedEvents)
    }
    return [];
  });

  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState();

  const handleSelectSlot = ( event) => {
      const start = event.start
      const end = event.end
      // there was a bug in the way that react-big-calendar works
      // where we had to set the end time for an event if an end wasn't
      // selected for a certain slot
    if (!end) {
      setSelectedDate({ start, start });
    }
    else {
      setSelectedDate({ start, end });
    }

    setOpen(true);
  };

  const handleSelectEvent = (event) => {

    setSelectedEvent(event)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEvent(null);

  };

  return (
    <div>
      <div style={{ height: 400 }}>
        <Calendar
          localizer={localizer}
          events={events}
          selectable
          startAccessor="start"
          endAccessor="end"
          // Specify available views
          views={['week', 'month', 'day', 'agenda']}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
        />
        <DialogComponent open={open} onClose={handleClose} selectedDate={selectedDate} setEvents={setEvents} selectedEvent={selectedEvent} />
      </div>
    </div>
  );
}

export default CalendarComponent;