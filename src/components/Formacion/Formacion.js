import React from 'react';
import './Formacion.scss';

const Formacion = (props) => {
    return (
        <>
            <div className="card-body row">
                <div className="col-8">
                    <h4> ORT, Almagro</h4>
                    <h5 className="carrera"> Bachillerato en Informática con especialización
                        en diseño y  Desarrollo de Aplicaciones Web y Móviles
                    </h5>
                </div>
                <div className="col-4 anio">
                    2016 - 2020
                </div>

            </div>
            <div className="card-body row">
                <div className="col-8">
                    <h4> Universidad De Buenos Aires</h4>
                    <h5 className="carrera"> Ingeniería en Informática
                    </h5>
                </div>
                <div className="col-4 anio">
                    2020 - ACTUALIDAD
                </div>

            </div>

        </>
    );
}

export default Formacion;