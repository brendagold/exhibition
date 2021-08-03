import React, { useState } from "react";
import TogoList from "./TogoList";

const Togo = (props) => {
    const {togos, addToTogos, removeTogo} = props
  return (
    <div>
      <h2>To-Go List</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus,
        dolores maiores facere sed id odit earum excepturi corporis nisi optio.
      </p>
      <button>Current</button>
      <button>Upcoming</button>
      <label htmlFor="date-event">Sort by Date:</label>
      <input type="date" name="date-event" id="dateEvent" placeholder="Sort by Date" />
      <TogoList removeTogo={removeTogo}  />
    </div>
  );
};

export default Togo;
