import React, { useState, useEffect, memo, useMemo } from "react";
import { withRouter } from "react-router-dom";
import axios from "../../utility/axios-car";

import CarInfo from "../../components/CarInfo/CarInfo";
import Error404 from "../../components/Errors/Error404";

const Car = ({location}) => {
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null);

  const id = useMemo(() => location.pathname.split("/")[2], [location.pathname]);

  useEffect(() => {
    axios.get("cars/" + id + ".json")
      .then(({ data }) => {
        if (data) setCar({ ...data, id: id });
        else return Promise.reject("No data");
      })
      .catch(err => {
        console.log(err);
        setError(<Error404 name="car" />);
      });
  }, [id]);

  return car ? <CarInfo car={car} /> : error ? error : null;
};

export default memo(withRouter(Car));
