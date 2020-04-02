import React from "react";
import { IconContext } from "react-icons";

import CarItem from "./../CarItem/CarItem";

import classes from "./CarListView.module.css";

const carListView = ({cars, removeCar}) => {
  let allCars = null;
  if (cars)
    allCars = cars.map((el, index) => (
      <CarItem key={el.id} index={index + 1} {...el} removeCar={removeCar} />
    ));

  return (
    <table className={classes.CarListView}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Marka</th>
          <th>Nazwa</th>
          <th>Data produkcji</th>
          <th>Cena</th>
        </tr>
      </thead>
      <tbody>
        <IconContext.Provider value={{ color: "red", size: "1.5rem" }}>
          {allCars}
        </IconContext.Provider>
      </tbody>
    </table>
  );
};

export default carListView;
