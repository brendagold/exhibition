import React, { useState } from "react";
import TogoList from "./TogoList";
import "./css/togo.css";
import moment from "moment";

const Togo = (props) => {
  const { togos, addToTogos, fullData, removeTogo } = props;
  const [sortedDate, setSortedDate] = useState([]);
  const [upcoming, setUpcoming] = useState([])

  const sortByDate = () => {
    togos.sort(function (x, y) {
      let a = new Date(x.endDate),
        b = new Date(y.endDate);

      return a - b;
    });
    setSortedDate(togos);
  };

  const upcomingEx = () => {
  //   let b = new Date()
  // let upcoming = togos.filter( (togo) => { moment(togo.StartDate) >= b
    
   
  //   });

  //   console.log(upcoming)

    let filtered = togos.filter((item) => moment(item.startDate) >= Date.now());

    console.log(filtered);
    setUpcoming(filtered)
  };

  const CurrentEx = () => {
    let result = togos.sort(function (x, y) {
      let a = new Date(x.endDate),
        b = new Date();

      let c = b - a;
      console.log(c);
      return b - a;
    });

    // let start = new Date();

    // let result =  togos.filter((item) => {
    //   let date = new Date(item.fields.endDate);
    //   let c = date >= start;
    //   return c

    // });

    console.log(result);
  };
  console.log(togos);
  return (
    <div className="togo-contain">
      <h2>To-Go List</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus,
        dolores maiores facere sed id odit earum excepturi corporis nisi optio.
      </p>
      <div className="buttons">
        <button className="togo-btn btnn">Current</button>
        <button className="togo-btn btnn" onClick={() => upcomingEx()}>
          Upcoming
        </button>
        <button onClick={() => sortByDate()} className="togo-btn btnn">
          Sort by End Date
        </button>
      </div>

      {/* <label htmlFor="date-event">Sort by Date:</label>
      <input type="date" name="date-event" id="dateEvent" placeholder="Sort by Date" /> */}
      <TogoList removeTogo={removeTogo} sortedDate={sortedDate} fullData={fullData} upcoming={upcoming} />
    </div>
  );
};

export default Togo;
