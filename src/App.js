import './App.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Exhibition from './components/Exhibition';
import Togo from './components/Togo';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Switch>
        <Route exact path="/">
          <Exhibition />
        </Route>
        <Route path="/togo">
          <Togo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
