import "./App.css";
import NavBar from "./reusableComponents/NavBar";
import { Route, Switch } from "react-router-dom";
import {Home} from '../src/imports/Imports.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
