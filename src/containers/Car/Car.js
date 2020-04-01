import React, { useState, useEffect, memo } from 'react'
import {withRouter} from 'react-router-dom';
import axios from '../../utility/axios-car';

import CarInfo from '../../components/CarInfo/CarInfo';
import Error from '../../components/Error/Error';

const Car = props => {

    const [car, setCar] = useState(null);
    const [error, setError] = useState(null);
    const id = props.location.pathname.split('/')[2];

    useEffect(() => {
        axios.get('cars/' + id + '.json')
        .then( ({data}) => {
            if(data)
                setCar({...data, id: id})
            else
                return Promise.reject("No data");
            })
        .catch(err => {console.log(err); setError(<Error name="car" />)});
    }, []);

    return car ? <CarInfo car={car} /> : (error ? error : null)
}

export default memo(withRouter(Car));