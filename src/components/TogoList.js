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
  const [togoSelected, setTogoSelected] = useState([]);
  const { togos } = props;
  const { removeTogo , sortedDate} = props;

  useEffect((props) => {
    if (localStorage.getItem("togosData")) {
      setTogoSelected(JSON.parse(localStorage.getItem("togosData")));
    }
  }, []);

  

  console.log(sortedDate)
  let data
 if(sortedDate.length === 0) {
   data = togoSelected
 } else {
   data = sortedDate
 }

 console.log(sortedDate)
  return (
    <>
      <div className="flex-contain">
        {data.map((ex) => (
          <div className="card-contain" key={ex.sys.id} id={ex.sys.id}>
            <img
              className="card-image"
              src={`https://artic-web.imgix.net/null82799ca2-66ed-4596-ab7e-283933a8be51/NPG_2018_16Obama_press.jpg?rect=0%2C377%2C2046%2C1151&auto=format&fm=jpg&q=1&fit=crop&crop=faces%2Cedges%2Centropy&w=750&h=422&blur=1200&sat=20`}
              alt=""
            />
            <div className="card-content">
              <h2>{ex.fields.exhibition}</h2>
              <p>{`Date: ${moment(ex.fields.date).format("DD/MM/YYYY")} - ${moment(
                ex.fields.endDate
              ).format("DD/MM/YYYY")}`}</p>
              <button className="card-link" onClick={() => removeTogo(ex)}>
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
