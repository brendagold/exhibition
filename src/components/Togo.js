import React, { useState } from "react";
import TogoList from "./TogoList";
import "./css/togo.css";
import moment from "moment";

const Togo = (props) => {
  const { togos, addToTogos, fullData, removeTogo } = props;

  const [filteredTogos, setFilteredTogos] = useState(togos);


  function filterTogos(condition) {
    if(condition ==='upcoming') {
       const filtered = togos.filter((item) => moment(item.startDate) >= Date.now());
       setFilteredTogos(filtered)
    } else if(condition === 'current') {
      const currentEx = togos.filter((item) => moment(item.endDate) >= Date.now() && moment(item.startDate) <= Date.now());
      setFilteredTogos(currentEx)
    } else if(condition = 'sorted') {
      //sorted by date
      const sorted = togos.sort(function (x, y) {
        let a = new Date(x.endDate),
          b = new Date(y.endDate);
  
        return a - b;
      });
setFilteredTogos(sorted)
    } else {
      setFilteredTogos(togos);
    }
  }

  return (
    <div className="togo-contain">
      <h2>To-Go List</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus,
        dolores maiores facere sed id odit earum excepturi corporis nisi optio.
      </p>
      <div className="buttons">
      <button className="togo-btn btnn" onClick={() => filterTogos('revert')}>
          Remove Filters
        </button>
        <button className="togo-btn btnn" onClick={() => filterTogos('current')}>
          Current 
        </button>
        <button className="togo-btn btnn" onClick={() => filterTogos('upcoming')}>
          Upcoming
        </button>
        <button onClick={() => filterTogos('sorted')} className="togo-btn btnn">
          Sort by End Date
        </button>
      </div>

      
      <TogoList
        removeTogo={removeTogo}
        fullData={fullData}
        filteredTogos={filteredTogos}
      />
    </div>
  );
};

export default Togo;
