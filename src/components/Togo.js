import React, { useState } from "react";
import TogoList from "./TogoList";
import "./css/togo.css";
import moment from "moment";

const Togo = (props) => {
  const { togos, addToTogos, fullData, removeTogo } = props;
  const [sortedDate, setSortedDate] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [current, setCurrent] = useState([]);
  const [home, setHome] = useState([])

  const sortByDate = () => {
    togos.sort(function (x, y) {
      let a = new Date(x.endDate),
        b = new Date(y.endDate);

      return a - b;
    });
    setSortedDate(togos);
    setUpcoming([]);
  };

  const upcomingEx = () => {
    let filtered = togos.filter((item) => moment(item.startDate) >= Date.now());

    setUpcoming(filtered);
    setSortedDate([]);
    setCurrent([])
  };

  const Home = () => {
    setHome(togos)
    setUpcoming([])
    setSortedDate([])
    setCurrent([])
  
  }

  const CurrentEx = () => {
    let currentEx = togos.filter((item) => moment(item.endDate) >= Date.now() && moment(item.startDate) <= Date.now());

    console.log(currentEx);
    setCurrent(currentEx);
    setUpcoming([])
    setSortedDate([])
  };

  return (
    <div className="togo-contain">
      <h2>To-Go List</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus,
        dolores maiores facere sed id odit earum excepturi corporis nisi optio.
      </p>
      <div className="buttons">
      <button className="togo-btn btnn" onClick={() => Home()}>
          Home
        </button>
        <button className="togo-btn btnn" onClick={() => CurrentEx()}>
          Current
        </button>
        <button className="togo-btn btnn" onClick={() => upcomingEx()}>
          Upcoming
        </button>
        <button onClick={() => sortByDate()} className="togo-btn btnn">
          Sort by End Date
        </button>
      </div>

      {/* <label htmlFor="date-event">Sort by Date:</label>
      <input type="date" name="date-event" id="dateEvent" placeholder="Sort by Date" /> */}
      <TogoList
        removeTogo={removeTogo}
        sortedDate={sortedDate}
        fullData={fullData}
        upcoming={upcoming}
        current={current}
        home={home}
      />
    </div>
  );
};

export default Togo;
