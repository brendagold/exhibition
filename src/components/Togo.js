import React, { useState } from "react";
import TogoList from "./TogoList";
import "./css/togo.css";

const Togo = (props) => {
  const { togos, addToTogos, removeTogo } = props;
  const [sortedDate, setSortedDate] = useState([])

  const sortByDate = () => {
   
   togos.sort(function (x, y) {
      let a = new Date(x.fields.endDate),
        b = new Date(y.fields.endDate);

      let c = a - b;
      console.log(c);
      return a - b;


    });
setSortedDate(togos)
    
  };


  return (
    <div className="togo-contain">
      <h2>To-Go List</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus,
        dolores maiores facere sed id odit earum excepturi corporis nisi optio.
      </p>
      <button>Current</button>
      <button>Upcoming</button>
      <button onClick={() => sortByDate()}>Sort by End Date</button>
      {/* <label htmlFor="date-event">Sort by Date:</label>
      <input type="date" name="date-event" id="dateEvent" placeholder="Sort by Date" /> */}
      <TogoList removeTogo={removeTogo} sortedDate={sortedDate} />
    </div>
  );
};

export default Togo;
