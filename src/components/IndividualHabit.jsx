import React from 'react';
import Col from 'react-bootstrap/Col';
import "../styles/IndividualHabit.css"
import { useState } from 'react';

// Props passed in are current year, current month, a habit tracker's title, and the remove function
const IndividualHabit = ({ year, month, habit_title, remove_func }) => {
  
  // Returns Box with color based on click action
  const Box = ({ color, value, onClick }) => {
    let fontColor;

    // Handles font color based on box color
    if (color === "#EACBD2") {
      fontColor = "grey";
    } else {
      fontColor = "white";
    }

    return (
      <div onClick={onClick} className="box" style={{
        backgroundColor: color,
        color: fontColor
      }}>{value}</div>
    );
  };

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // Handle case of a Leap Year
  if (year % 4 === 0) {
    daysInMonth[1] = 29;
  } else {
    daysInMonth[1] = 28;
  }

  // Handle change of color
  const [colors, setColors] = useState(Array(daysInMonth[month]).fill('#EACBD2'));

  const changeColor = (index) => {
    const newColors = [...colors];
    newColors[index] = newColors[index] === '#EACBD2' ? '#A93F55' : '#EACBD2';
    setColors(newColors);
  };
  // TODO: set the color list per month (maybe as an object?) to local storage
  console.log(colors)
  // based on console log - appears to be a list of the colors, so could change the way 
  // we read in the color list and set it to 0 or 1, or just directly store color list!

  return (
    <>
      <div class="habit-title-container">
        <h3>{habit_title}  </h3>
        <button className='button_remove' type="button" onClick={() => remove_func(habit_title)}>
              ❌
                </button>
      </div>
      <div class="habit-tracker-container">
        {colors.map((color, index) => (
          <Box key={index} color={color} value={index + 1} onClick={() => changeColor(index)} />
        ))}
      </div>
    </>
  );
};


export default IndividualHabit;