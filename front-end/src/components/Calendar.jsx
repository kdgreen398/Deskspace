import React, { useState } from "react";
import { useStore } from "react-redux";
import '../styles/Calendar.css';

export default function Calendar(props) {

    const store = useStore();
    const [state, setState] = useState(store.getState());
    const selectedDate = state.selectedDate;
    
    
    const [dateObj, setDateObj] = useState(new Date());
    let [days, setDays] = useState([]);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    
    const setSelectedDate = (dayOfTheYear, ...monthDetails) => {
        const [month, switchMonth] = monthDetails;
        // if (switchDate[])
        if (month) {
            store.dispatch({ type: 'SET_SELECTED_DATE', payload: new Date(dateObj.getFullYear(), month, dayOfTheYear) });
            switchMonth();
        } else {
            store.dispatch({ type: 'SET_SELECTED_DATE', payload: new Date(dateObj.getFullYear(), dateObj.getMonth(), dayOfTheYear) });
        }

        props.setState(store.getState());
    }

    const renderCalendar = () => {
        dateObj.setDate(1);
        days = [];

        const lastDay = new Date(
            dateObj.getFullYear(),
            dateObj.getMonth() + 1,
            0
        ).getDate();

        const prevLastDay = new Date(
            dateObj.getFullYear(),
            dateObj.getMonth(),
            0
        ).getDate();

        const firstDayIndex = dateObj.getDay();

        const lastDayIndex = new Date(
            dateObj.getFullYear(),
            dateObj.getMonth() + 1,
            0
        ).getDay();

        const nextDays = 7 - lastDayIndex - 1;

        for (let x = firstDayIndex; x > 0; x--) {
            const i = prevLastDay - x + 1;
            const dayElement = <div className="prev-date" onClick={() => setSelectedDate(i, dateObj.getMonth() - 1, previousMonth)}>{i}</div>;
            days.push(dayElement);
        }

        for (let i = 1; i <= lastDay; i++) {
            if (i === selectedDate.getDate() && dateObj.getMonth() === selectedDate.getMonth()) {
                const dayElement = <div className="selected-date today" onClick={() => setSelectedDate(i)}>{i}</div>;
                days.push(dayElement);
            } else {
                const dayElement = <div onClick={() => setSelectedDate(i)}>{i}</div>;
                days.push(dayElement);
            }
        }

        for (let i = 1; i <= nextDays; i++) {
            const dayElement = <div className="next-date" onClick={() => setSelectedDate(i, dateObj.getMonth() + 1, nextMonth)}>{i}</div>;
            days.push(dayElement);
        }
    };

    const previousMonth = () => {
        console.log('prev');
        dateObj.setMonth(dateObj.getMonth() - 1);
        renderCalendar();
        setDays(days);
    }

    const nextMonth = () => {
        console.log('next');
        dateObj.setMonth(dateObj.getMonth() + 1);
        renderCalendar();
        setDays(days);
    };

    renderCalendar();

    return (
        <div className="calendar">
            <div className="month">
                <button onClick={previousMonth} className="toggleMonth">&#60;</button>
                <div className="date">
                    <h1>{months[dateObj.getMonth()]}</h1>
                    <p>{props.selectedDate.toDateString()}</p>
                </div>
                <button onClick={nextMonth} className="toggleMonth">&#62;</button>
            </div>
            <div className="weekdays">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
            </div>
            <div className="days">{days.map((day, index) => <React.Fragment key={index}>{day}</React.Fragment>)}</div>
        </div>
    );
}