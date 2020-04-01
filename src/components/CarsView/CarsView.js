import React from 'react';

import CarListView from './CarListView/CarListView';
import CarForm from './CarForm/CarForm';

import classes from './CarView.module.css';

const carsView = props => (
    <div className={classes.CarView}>
        <h1>Spis samochodów</h1>
        <CarListView {...props} />
        <CarForm addCar={props.addCar} />
    </div>
);

export default carsView;