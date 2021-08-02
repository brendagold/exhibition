import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Exhibition from "./components/Exhibition";
import Togo from "./components/Togo";
import api from "./services/api";

function App() {
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

  const getExhibits = async () => {
    const response = await api.get();
    setExhibits(response.data.items);
  };

  const addToTogos = (exhibitToAdd) => {
    const isAdded = togos.some(
      (exhibit) => exhibit.sys.id === exhibitToAdd.sys.id
    );

    if (!isAdded) {
      setTogos([...togos, exhibitToAdd]);
    } else {
      const filteredTogos = togos.filter(
        (togo) => togo.sys.id !== exhibitToAdd.sys.id
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
        <h1>Simple SPA</h1>
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
            <Exhibition exhibits={exhibits} addToTogos={addToTogos} />
          </Route>
          <Route path="/togo">
            <Togo exhibits={exhibits} togo={togos} />
          </Route>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
