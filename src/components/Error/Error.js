import React from 'react'
import {Link} from 'react-router-dom';

import classes from './Error.module.css';

const Error = props => {
    return (
        <div className={classes.Error}>
        <h1>Error 404 - {props.name} not found!</h1>
        The resource You were looking for doesn't exist or has been moved to
        a new location.

        For more details, please visit page: <Link to='/cars'>https://localhost:3000/cars</Link>
        </div>
    );
};

export default Error;