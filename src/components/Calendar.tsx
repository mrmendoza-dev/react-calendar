import { useState, useEffect } from "react";
import "../css/Calendar.css"
import CalendarNav from "./CalendarNav";
import {nanoid} from "nanoid"
export default function Calendar() {

const [currentDate, setCurrentDate] = useState(new Date());
const [currentMonth, setCurrentMonth] = useState(buildMonth());

  useEffect(() => {
    setCurrentMonth(buildMonth());
  }, [currentDate]);


  function getNextDay(day: any) {
    let nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 1);
    return nextDay;
  }

  function buildMonth() {
    let daysInMonth = getDaysInMonth(
      currentDate.getMonth() + 1,
      currentDate.getFullYear()
    );
    let iterableDay = new Date(currentDate);
    iterableDay.setDate(1);
    let month = [...Array(daysInMonth)].map((_, i) => {
      let monthDay = {
        index: i,
        date: iterableDay,
      };
      iterableDay = getNextDay(iterableDay);
      return monthDay;
    });
    
    for (var i = 0; i < currentDate.getDay(); i++) {
      month.unshift({ index: -1, date: new Date() });
    }
    return month;
  }

  function getDaysInMonth(month: any, year: any) {
    return new Date(year, month, 0).getDate();
  }

  function renderMonth() {
    let monthHtml = currentMonth.map((day: any) => (
      <>
        {day.index != -1 ? (
          <div className="calendar-day" key={nanoid()}>
            <p className="day-label">{day.index + 1}</p>
          </div>
        ) : (
          <div className="calendar-empty"></div>
        )}
      </>
    ));
    return monthHtml;
  }

  function nextMonth() {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  }
    function prevMonth() {
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
      );
    }

    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

    return (
      <div className="Calendar">
        <div className="CalendarNav">
          <div className="button-tray">
            <button className="nav-btn" onClick={prevMonth}>
              <i className="fa-sharp fa-solid fa-caret-left"></i>
            </button>

            <div className="monthly-header">
              <p className="header-month">
                {currentDate.toLocaleString("default", { month: "long" })}
              </p>
              <p className="header-year">{currentDate.getFullYear()}</p>
              {/* <input type="date" /> */}
            </div>
            <button className="nav-btn" onClick={nextMonth}>
              <i className="fa-sharp fa-solid fa-caret-right"></i>
            </button>
          </div>
        </div>

        <div className="weekday-labels">
          {weekdays.map((day) => (
            <div className="weekday-label">
              <p>{day}</p>
            </div>
          ))}
        </div>
        <div className="month">{renderMonth()}</div>
      </div>
    );

}
