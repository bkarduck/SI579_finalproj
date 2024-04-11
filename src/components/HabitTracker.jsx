import React from 'react';
import IndividualHabit from './IndividualHabit';
import { IoMdAdd } from "react-icons/io";
import { useState } from 'react';
const HabitTracker = () => {
    // Get the current Month
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const thisDate = new Date();
    const thisMonth = monthNames[thisDate.getMonth()];
    const [habitTitle, setHabitTitle] = useState('');
    const [habitList, setHabitList] = useState(() => {
        const storedItems = localStorage.getItem('my-habits-list');
        if (storedItems) {
            return JSON.parse(storedItems)
        }
        return [];
    });

    const handleHabit = (e) => {
        setHabitTitle(e.target.value);
    };

    const addItem = () => {
        if (habitTitle) {
            setTodoItems((previousItems) => {
                const newItem = {
                    habit_title: habitTitle,
                }
                const updatedItems = [newItem, ...previousItems]
                localStorage.setItem('my-habits-list', JSON.stringify(updatedItems));
                return updatedItems;
            });
            setHabitTitle('');
        }
    }

    return (
        <>
            <h2>Habit Tracker</h2>
            <h3>Month: {thisMonth}</h3>
            <div class="habit-tracker-wrapper">
                {/* Map habit list here and call Indivisual Habit Component */}
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Add New Habit Tracker" aria-label="Add New Habit Tracker" aria-describedby="button-addon2" value={habitTitle} onChange={handleHabit}/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addItem}>
                    <IoMdAdd />
                </button>
            </div>
        </>
    );
}

export default HabitTracker;