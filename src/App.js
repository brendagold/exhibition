import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Exhibition from "./components/Exhibition";
import Togo from "./components/Togo";
import api from "./services/api";

function App() {
  const [exhibits, setExhibits] = useState([]);
  const [togos, setTogos] = useState([]);

  useEffect(() => {
    getExhibits();
  }, []);

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

      console.log(filteredTogos);
      setTogos(filteredTogos);
    }
  };
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Exhibition exhibits={exhibits} addToTogos={addToTogos} />
        </Route>
        <Route path="/togo">
          <Togo exhibits={exhibits} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
