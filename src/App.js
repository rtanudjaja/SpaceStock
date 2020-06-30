import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import DetailsPage from "./components/DetailsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/details/:place_id" component={DetailsPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
