import React, { useEffect, useState } from "react";
import "./css/exhibition.css";
import Exhibit from "./Exhibit";
import moment from "moment";

const Exhibition = (props) => {
  const { exhibits, addToTogos, fullData } = props;

  console.log(fullData)

  const dataArr = exhibits.map((item, index) => {
    return {
     image: fullData.includes?.Asset?.find(asset => asset.sys.id === item.fields.exhibitionImage.sys.id).fields.file.url,
     title: item.fields.exhibition,
     startDate: item.fields.date,
     endDate: item.fields.endDate,
     link: item.fields.links,
     id: item.sys.id
    };
  })

  return (
    <>
      <h1>Exhibitions</h1>
      <div className="exhibit">
        {fullData?.includes?.Asset?.length > 0 ?
      dataArr.map((ex, idx) => (
          <Exhibit
            key={ex.id}
            id={ex.id}
            imgSrc={ex.image}
            title={ex.title}
            date={`${moment(ex.startDate).format("DD/MM/YYYY")} - ${moment(
              ex.endDate
            ).format("DD/MM/YYYY")}`}
            addToTogos={addToTogos}
            ex={ex}
          />
      )
    ) : (<h1>Loading</h1>)}
        </div>
    </>
  );
};

export default Exhibition;
