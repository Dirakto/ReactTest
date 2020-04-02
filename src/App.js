import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import CarList from "./containers/CarList/CarList";
import Car from "./containers/Car/Car";

import classes from "./App.module.css";

function App() {
  return (
    <Router>
      <header className={classes.Header}>
        <span>
          Spółka <i>"Samochód i Ty"</i>
        </span>
        <nav>
          <span>O nas</span>
          <span>Kontakt</span>
          <span>Sklep</span>
        </nav>
      </header>

      <div style={{ flex: "1 0 auto" }}>
        <Switch>
          <Route path="/cars/:id" component={Car} />
          <Route exact path="/cars" component={CarList} />
          <Redirect to="/cars" />
        </Switch>
      </div>

      <footer className={classes.Footer}>
        <nav>
          <span>Regulamin</span>
          <span>Polityka prywatności</span>
          <span>Reklamacje</span>
          <span>FAQ</span>
        </nav>
      </footer>
    </Router>
  );
}

export default App;
