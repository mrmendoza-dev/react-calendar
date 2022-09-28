





import { useState } from "react";
import "../css/Calendar.css";

export default function CalendarNav(props: any) {

  return (
    <div className="CalendarNav">
      <div className="button-tray">
        <button className="nav-btn">
          <i className="fa-sharp fa-solid fa-caret-left"></i>
        </button>
        <div className="monthly-header">
          <p>
            {props.currentDate.toLocaleString("default", { month: "long" })}
          </p>
        </div>
        <button className="nav-btn">
          <i className="fa-sharp fa-solid fa-caret-right"></i>
        </button>
      </div>
    </div>
  );
}
