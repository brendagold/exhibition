import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Exhibition from "./components/Exhibition";
import Togo from "./components/Togo";
import api from "./services/api";
import { client } from "./services/contentful";
//const contentful = require('contentful')

function App() {
  const [fullData, setFullData] = useState([])
  const [exhibits, setExhibits] = useState([]);
  const [togos, setTogos] = useState([]);
  

  useEffect(() => {
    getExhibits();
    if (localStorage.getItem("togosData")) {
      setTogos(JSON.parse(localStorage.getItem("togosData")));
    }
   
  }, []);

  
  useEffect(() => {
    localStorage.setItem("togosData", JSON.stringify(togos));
  }, [togos]);

  useEffect(() => {
    client
    .getEntry()
    .then((response) => console.log(response))
    .catch(console.error);
  }, [])
  const getExhibits = async () => {
    const response = await api.get();
    setExhibits(response.data.items);
    setFullData(response?.data)
  };


  const removeTogo = (ex) => {
    const removedTogo = togos.filter((togo) => togo.sys.id !== ex.sys.id);
    setTogos(removedTogo);
    window.location.reload(false);
  };

  const addToTogos = (exhibitToAdd) => {
    const isAdded = togos.some(
      (exhibit) => exhibit.id === exhibitToAdd.id
    );

    if (!isAdded) {
      setTogos([...togos, exhibitToAdd]);
    } else {
      const filteredTogos = togos.filter(
        (togo) => togo.id !== exhibitToAdd.id
      );

      setTogos(filteredTogos);
    }
  };

  return (
    // <div className="App">
    //   <NavBar />
    //   <Switch>
    //     <Route exact path="/">
    //       <Exhibition exhibits={exhibits} addToTogos={addToTogos} />
    //     </Route>
    //     <Route path="/togo">
    //       <Togo exhibits={exhibits} togo={togos}/>
    //     </Route>
    //   </Switch>
    // </div>
    <HashRouter>
      <div>
        <h1 style={{ marginTop: "10px", marginLeft: "10px" }}>
          Exhibition Go-er
        </h1>
        <ul className="header">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/togo">To-Go List</NavLink>
          </li>
        </ul>
        <div className="content">
          <Route exact path="/">
            <Exhibition exhibits={exhibits} addToTogos={addToTogos} fullData={fullData} />
          </Route>
          <Route path="/togo">
            <Togo exhibits={exhibits} togos={togos} removeTogo={removeTogo} fullData={fullData} />
          </Route>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
