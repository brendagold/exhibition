import React, { useEffect, useState } from "react";
import "./css/togo.css";
import moment from 'moment'

const TogoList = (props) => {
  const [togoSelected, setTogoSelected] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { togos } = props;
  const { removeTogo} = props

  useEffect((props) => {
   
    if (localStorage.getItem("togosData")) {
      setTogoSelected(JSON.parse(localStorage.getItem("togosData")));
    }
  }, []);

  console.log(togoSelected);

  return (
      
         
              <>
               {togoSelected.map(ex => (
                   <div className="contain" key={ex.sys.id}
                   id={ex.sys.id}>
                   <div className="togo-details">
                     <h2>{ex.fields.exhibition}</h2>
                     <p>{`${moment(ex.fields.date).format("DD/MM/YYYY")} - ${moment(ex.fields.endDate).format("DD/MM/YYYY")
            
        }`}</p>
                     <button className="btn" onClick={() => removeTogo(ex)}>Remove from Togo list</button>
                   </div>
                   <div className="togo-image">
                     <img
                       src={`https://artic-web.imgix.net/null82799ca2-66ed-4596-ab7e-283933a8be51/NPG_2018_16Obama_press.jpg?rect=0%2C377%2C2046%2C1151&auto=format&fm=jpg&q=1&fit=crop&crop=faces%2Cedges%2Centropy&w=750&h=422&blur=1200&sat=20`}
                       alt=""
                     />
                   </div>
                 </div>
               ))}
              
              </>
        
      
    
  );
};

export default TogoList;
