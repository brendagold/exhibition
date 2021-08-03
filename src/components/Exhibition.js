import React, { useEffect, useState } from "react";
import "./css/exhibition.css";
import Exhibit from "./Exhibit";
import moment from "moment";

const Exhibition = (props) => {
  const { exhibits, addToTogos } = props;

  let exhibitsList;
  if (exhibits) {
    exhibitsList = exhibits.map((ex, idx) => {
      return (
        <>
          <Exhibit
            key={ex.sys.id}
            id={ex.sys.id}
            imgSrc={`https://artic-web.imgix.net/null82799ca2-66ed-4596-ab7e-283933a8be51/NPG_2018_16Obama_press.jpg?rect=0%2C377%2C2046%2C1151&auto=format&fm=jpg&q=1&fit=crop&crop=faces%2Cedges%2Centropy&w=750&h=422&blur=1200&sat=20`}
            title={ex.fields.exhibition}
            date={`${moment(ex.fields.date).format("DD/MM/YYYY")} - ${moment(
              ex.fields.endDate
            ).format("DD/MM/YYYY")}`}
            addToTogos={addToTogos}
            ex={ex}
          />
        </>
      );
    });
  }

  return (
    <>
      <h1>Exhibitions</h1>
      <div className="exhibit">{exhibitsList}</div>;
    </>
  );
};

export default Exhibition;
