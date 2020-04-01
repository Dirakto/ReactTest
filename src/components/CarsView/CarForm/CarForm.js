import React, { useState } from 'react'
import { useForm } from "react-hook-form";

import classes from './CarForm.module.css';

const CarForm = props => {

    const { handleSubmit, register, errors, setError } = useForm();
    const [isFormOpen, setIsFormOpen] = useState(false);

    const submitForm = (res) => {
        props.addCar(res);
        toggleForm();
    }

    const toggleForm = () => setIsFormOpen(prevState => !prevState);

    const form = (
        <form className={classes.Form} onSubmit={handleSubmit(submitForm)}>
            <div>
                <label>Marka:</label>
                <input
                    name="marka"
                    ref={register({
                        required: 'Pole wymagane',
                        pattern: {
                            value: /[A-Za-z ]/,
                            message: "Niepoprawna nazwa marki"
                        }
                        })}
                />
                <span className={classes.Error}>{errors.marka && errors.marka.message}</span>
            </div>

            <div>
                <label>Nazwa:</label>
                <input
                    name="nazwa"
                    ref={register({
                        required: 'Pole wymagane',
                        pattern: {
                                    value: /[A-Za-z ]/,
                                    message: "Niepoprawna nazwa samochodu"
                        }
                    })}
                />
                <span className={classes.Error}>{errors.nazwa && errors.nazwa.message}</span>
            </div>

            <div>
                <label>Data produkcji:</label>
                <input
                    type="date"
                    name="dataProd"
                    ref={register({
                        required: 'Podaj datę',
                        validate: value => new Date(value) <= Date.now() || setError("dataProd", "notMatch", "Niepoprawna data")
                    })}
                />
                
                <span className={classes.Error}>{errors.dataProd && errors.dataProd.message}</span>
            </div>

            <div>
                <label>Cena:</label>
                <input
                    type="number"
                    step="0.01"
                    name="cena"
                    ref={register({
                        required: 'Pole wymagane',
                    })}
                />
                <span className={classes.Error}>{errors.cena && errors.cena.message}</span>
            </div>

            <div>
                <label>VIN:</label>
                <input
                    name="vin"
                    ref={register({
                        required: 'Pole wymagane',
                    })}
                />
                <span className={classes.Error}>{errors.vin && errors.vin.message}</span>
            </div>

            <button type="submit">Zapisz</button>
        </form>);

    return (
        <React.Fragment>
            <button style={{marginTop: 5}} onClick={toggleForm}>Dodaj samochód</button>
            {isFormOpen ? form : null}
        </React.Fragment>
    );
};

export default CarForm;