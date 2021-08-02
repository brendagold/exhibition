import React, { useState } from "react";
import './css/exhibition.css'


const Exhibit = (props) => {
  return (
    <div className="exhibit">
      <div className="exhibit-box">
        <img className="exhibit-img" src={props.imgSrc} alt="obama" />
        <h2 className="exhibit-title">{props.title}</h2>
        <p className="exhibit-date">{props.date}</p>
      </div>
    </div>
  );
};

export default Exhibit;
