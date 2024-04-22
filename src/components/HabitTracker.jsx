import React from 'react';
import IndividualHabit from './IndividualHabit';
import { IoMdAdd } from "react-icons/io";
import { useState } from 'react';
import "../styles/HabitTracker.css"
const HabitTracker = () => {

    // Get the current Month
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const thisDate = new Date();
    const thisMonth = monthNames[thisDate.getMonth()];

    const [habitTitle, setHabitTitle] = useState('');

    // List of Habit Trackers stored in Local Storage
    // If Local Storage is empty, set to empty array
    const [habitList, setHabitList] = useState(() => {
        const storedItems = localStorage.getItem('my-habits-list');
        if (storedItems) {
            return JSON.parse(storedItems)
        }
        return [];
    });

    // Update Habit Title state
    const handleHabit = (e) => {
        setHabitTitle(e.target.value);
    };

    // Add new Habit to List of Habits
    const addItem = () => {
        if (habitTitle) {
            setHabitList((previousItems) => {
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

    // @todo Add Remove Habit Function
    const handleRemove = (habitToRemove) => {
        setHabitList((previousValues) => {
            const updatedHabitList = previousValues.filter(item => item.habit_title !== habitToRemove);
            localStorage.setItem('my-habits-list', JSON.stringify(updatedHabitList));
            localStorage.removeItem(habitToRemove)
            return updatedHabitList;
        })
    }

    return (
        <>
            <div class="heading-container">
                <h2>Habit Tracker</h2>
                <h3 class="month">Month: {thisMonth}</h3>
            </div>

            <div class="habit-tracker-wrapper">
                {/* Display List of Habits with a Map */}
                {habitList.map((item, i) => <IndividualHabit key={i} year={thisDate.getFullYear()} month={thisDate.getMonth()} habit_title={item.habit_title} remove_func={handleRemove} />)
                }
                <IndividualHabit year={thisDate.getFullYear()} month={thisDate.getMonth()} habit_title='Dummy Habit' />


            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Add New Habit Tracker" aria-label="Add New Habit Tracker" aria-describedby="button-addon2" value={habitTitle} onChange={handleHabit} />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addItem}>
                    <IoMdAdd />
                </button>
            </div>
        </>
    );
}

export default HabitTracker;