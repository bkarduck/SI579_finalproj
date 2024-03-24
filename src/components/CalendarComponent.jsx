import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {useState} from "react";


const localizer = momentLocalizer(moment);

const CalendarComponent = (props) => {
    const [view, setView] = useState('month');
    return (
        <div>
          <select value={view} onChange={(e) => setView(e.target.value)}>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="day">Day</option>
          </select>
          <div style={{ height: 400 }}>
            <Calendar
              localizer={localizer}
              // events={[]}
              startAccessor="start"
              endAccessor="end"
              view={view}
              onView={(view) => setView(view)}
            />
          </div>
        </div>
      );
    }
export default CalendarComponent;