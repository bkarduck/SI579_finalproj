import React from 'react';

// props passed in: thisDate, HabitTitle
const IndividualHabit = (thisDate) => {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // Hanlde case of a Leap Year
    if (thisDate.getFullYear % 4 === 0){
        daysInMonth[1] = 29;
    }else{
        daysInMonth[1] = 28;
    }
    return (
        <>
        </>
    )
}
export default IndividualHabit;