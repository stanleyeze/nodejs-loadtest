import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/index";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route to="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
