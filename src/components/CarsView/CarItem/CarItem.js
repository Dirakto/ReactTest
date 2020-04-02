import React from 'react';
import {MdDeleteForever} from 'react-icons/md';
import {withRouter} from 'react-router-dom';

import {options} from '../../../utility/global-config';

import classes from './CarItem.module.css';

const carItem = props => {

    const {history, location, id, index, marka, nazwa, dataProd, cena, removeCar} = props;
    
    const viewCar = id => {
        history.push(location.pathname + '/' + id);
    }

    return (
    <tr className={classes.CarItem} onClick={() => viewCar(id)}>
        <td>{index}</td>
        <td>{marka}</td>
        <td>{nazwa}</td>
        <td>{new Date(dataProd).toLocaleDateString("pl-PL", options)}</td>
        <td>{cena}</td>
        <td><span style={{position: 'relative', top: 2.5}} onClick={e => removeCar(e, id)}><MdDeleteForever /></span></td>
    </tr>
    );
}

export default withRouter(carItem);