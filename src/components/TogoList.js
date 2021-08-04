import React, { useEffect, useState } from "react";
import "./css/togo.css";
import moment from "moment";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardDeck,
  Button,
} from "reactstrap";

const TogoList = (props) => {
  const { togos, fullData, removeTogo, sortedDate, upcoming, current } = props;
  const [togoSelected, setTogoSelected] = useState([]);

  useEffect((props) => {
    if (localStorage.getItem("togosData")) {
      setTogoSelected(JSON.parse(localStorage.getItem("togosData")));
    }
  }, []);

  console.log(sortedDate);
  let data;
  if (sortedDate.length !== 0) {
    data = sortedDate;
  } else if (upcoming.length !== 0) {
    data = upcoming;
  } else if (current !== 0) {
    data = current
  } else {
    data = togoSelected;
  }

  console.log(sortedDate);

  return (
    <>
      <div className="flex-contain">
        {fullData?.includes?.Asset?.length > 0 ? (
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
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </>
  );
};

export default TogoList;
