import React, { useEffect, useState } from "react";
import "./css/togo.css";
import moment from "moment";

const TogoList = (props) => {
  const { fullData, removeTogo, filteredTogos, togos } = props;

  let data;

  if (filteredTogos.length === 0) {
    data = togos;
  } else {
    data = filteredTogos;
  }

  console.log(filteredTogos);
  return (
    <>
      <div className="flex-contain">
        {fullData?.includes?.Asset?.length > 0 &&
          data.map((ex, idx) => (
            <div className="card-contain" key={ex.id} id={ex.id}>
              <img className="card-image" src={ex.image} alt="" />
              <div className="card-content">
                <h2>{ex.title}</h2>
                <p>{`Date: ${moment(ex.startDate).format(
                  "DD/MM/YYYY"
                )} - ${moment(ex.endDate).format("DD/MM/YYYY")}`}</p>
                <button
                  className="card-link btnn"
                  onClick={() => removeTogo(ex)}
                >
                  Remove Togo
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default TogoList;
