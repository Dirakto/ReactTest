import React, { useState, useEffect } from "react";
import axios from "./../../utility/axios-car";

import CarsView from "../../components/CarsView/CarsView";

const CarList = props => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("cars.json", {
        "Content-Type": "application/json"
      })
      .then(({ data }) => {
        const newCars = [];
        for (const el in data) newCars.push({ ...data[el], id: el });
        setCars(newCars);
      })
      .catch(err => setError(err));
  }, []);

  const addCar = newCar => {
    axios.post("cars.json", newCar)
    .then(({ data }) => {
      setCars(cars.concat([{ ...newCar, id: data.name }]));
    });
  };

  const removeCar = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    axios.delete(`cars/${id}.json`)
      .then(() => {
        const newCars = cars.filter(el => el.id !== id);
        setCars(newCars);
      })
      .catch(err => setError(err));
  };

  return (
    <CarsView
      cars={cars}
      addCar={addCar}
      removeCar={removeCar}
      errorOccured={error}
    />
  );
};

export default CarList;
