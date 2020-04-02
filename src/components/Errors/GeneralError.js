import React from "react";

import classes from "./Error.module.css";

const GeneralError = props => (
  <div className={classes.GeneralError}>
    <h1>{props.komunikat}</h1>
    <p>{props.message}</p>
  </div>
);

export default GeneralError;
