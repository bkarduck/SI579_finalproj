import React from 'react';
import Col from 'react-bootstrap/Col';
import "../styles/individualHabit.css"
import { useState } from 'react';
// props passed in: thisDate, HabitTitle


const IndividualHabit = ({ year, month, habit_title}) => {

    const Box = ({ color, value, onClick }) => (
        <div onClick={onClick} style={{
          width: '30px',
          height: '30px',
          backgroundColor: color,
          display: 'inline-block',
          margin: '2px'
        }} >{value}</div>
      );
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // Handle case of a Leap Year
    if (year % 4 === 0){
        daysInMonth[1] = 29;
    }else{
        daysInMonth[1] = 28;
    }
      
   
    const [colors, setColors] = useState(Array(daysInMonth[month]).fill('grey'));
    
    const changeColor = (index) => {
        const newColors = [...colors];
        newColors[index] = newColors[index] === 'grey' ? 'blue' : 'grey';
        setColors(newColors);
    };
    
    return (
          <div>
            {habit_title}
            {colors.map((color, index) => (
              <Box key={index} color={color} value={index + 1} onClick={() => changeColor(index)} />
            ))}
          </div>
        );
      };
      

export default IndividualHabit;