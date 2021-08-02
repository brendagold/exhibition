import React, {useEffect, useState } from "react";
import './css/exhibition.css'
import Exhibit from "./Exhibit";
import api from "../services/api";


const Exhibition = () => {
    const [exhibits, setExhibits] = useState([]);
  
    useEffect(() => {
      getExhibits();
    }, []);
  
    const getExhibits = async () => {
      const response = await api.get();
      setExhibits(response.data.items);
    };

    let list = exhibits
    console.log(list)
    let exhibitsList;
  if (exhibits) {
    exhibitsList = exhibits.map(ex => {
      return <Exhibit imgSrc={`https://artic-web.imgix.net/null82799ca2-66ed-4596-ab7e-283933a8be51/NPG_2018_16Obama_press.jpg?rect=0%2C377%2C2046%2C1151&auto=format&fm=jpg&q=1&fit=crop&crop=faces%2Cedges%2Centropy&w=750&h=422&blur=1200&sat=20`} title={ex.fields.exhibition} date={`${ex.fields.date} - ${ex.fields.endDate}`} />;
    });
  }
    
    
    console.log(exhibitsList)
  return (
    <div className="">
      {exhibitsList}
    </div>
  );
};

export default Exhibition;
