import React, { useState } from "react";
import './css/exhibition.css';



const Exhibit = (props) => {
  const { addToTogos} = props
  return (
    
      <div className="exhibit-box" >
        <img className="exhibit-img" src={props?.imgSrc} alt="obama" />
        <h2 className="exhibit-title">{props.title}</h2>
        <p className="exhibit-date">{props.date}</p>
        <button onClick={() => addToTogos(props.ex)} className="btnn">Add to TogoList</button>
      </div>
    
  );
};

export default Exhibit;
