import React from "react";

import CarListView from "./CarListView/CarListView";
import CarForm from "./CarForm/CarForm";
import GeneralError from "../Errors/GeneralError";

import classes from "./CarView.module.css";

const carsView = props => (
  <div className={classes.CarView}>
    <h1>Spis samochodów</h1>
    {props.errorOccured ?
      <GeneralError komunikat={"Błąd pobierania"} message={"Nie udało się pobrać informacji"}/>
    : <CarListView {...props} />
    }
    <CarForm addCar={props.addCar} />
  </div>
);

export default carsView;
