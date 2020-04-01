import React from 'react';
import {MdDeleteForever} from 'react-icons/md';
import {withRouter} from 'react-router-dom';

import {options} from '../../../utility/global-config';

import classes from './CarItem.module.css';

const carItem = props => {
    
    const viewCar = id => {
        props.history.push(props.location.pathname + '/' + id);
    }

    return (
    <tr className={classes.CarItem} onClick={() => viewCar(props.id)}>
        <td>{props.index}</td>
        <td>{props.marka}</td>
        <td>{props.nazwa}</td>
        <td>{new Date(props.dataProd).toLocaleDateString("pl-PL", options)}</td>
        <td>{props.cena}</td>
        <td><span style={{position: 'relative', top: 2.5}} onClick={e => props.removeCar(e, props.id)}><MdDeleteForever /></span></td>
    </tr>
    );
}

export default withRouter(carItem);