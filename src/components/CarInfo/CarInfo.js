import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';

import {options} from '../../utility/global-config';

import classes from './CarInfo.module.css';
import carPhoto from '../../static/img/samochod.png';

const CarInfo = props => {

    const {car} = props;

    return (
        <React.Fragment>
        <div className={classes.CarInfo}>
            <div>
                <h1>{car.marka} {car.nazwa}</h1>

                <div className={classes.TechData}>
                    <h3 className="first">Dane techniczne:</h3>
                    <span>VIN: {car.vin ? car.vin : 'Nieznany'}</span>
                    <span>Data produkcji: {new Date(car.dataProd).toLocaleDateString("pl-PL", options)}</span>
                    <span>Cena: {car.cena} PLN</span>
                    <span>ID: {car.id}</span>
                </div>
            </div>    

            <img src={carPhoto} alt="Samochod" />
        </div>
        <div className={classes.Description}>
            <LoremIpsum p={2} />
        </div>
        </React.Fragment>
    );
};

export default CarInfo;