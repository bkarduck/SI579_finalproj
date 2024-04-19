import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {useState} from "react";
import DialogComponent from './DialogComponent'

// need to run: 
// npm install @mui/material @emotion/react @emotion/styled

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {

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
    if (!end) {
      setSelectedDate({ start, start });
    }
    else {
      setSelectedDate({ start, end });
    }

    const date = new Date();
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
  
    // const [view, setView] = useState('month');
    return (
        <div>
          {/* <select value={view} onChange={(e) => setView(e.target.value)}>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="day">Day</option>
          </select> */}
          <div style={{ height: 400 }}>
            <Calendar
              localizer={localizer}
              events={events}
              selectable
              startAccessor="start"
              endAccessor="end"
              views={['week', 'month', 'day', 'agenda']}  // Specify available views

              // view={view}
              // onView={(view) => 
              //   setView(view)}
              onSelectEvent={handleSelectEvent}
              onSelectSlot={handleSelectSlot}
              
            />
          <DialogComponent open={open} onClose={handleClose} selectedDate={selectedDate} setEvents={setEvents} selectedEvent={selectedEvent}  />


          </div>
        </div>
      );
    }
export default CalendarComponent;