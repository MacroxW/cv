import React from 'react';
import * as data  from '../../assets/data.json';

const AcercaDe = () => {
    const {about} = data;

    return (
        <div className="AcercaDe">

            <h5>
                {about}
            </h5>
            <hr></hr>
        </div>);
}

export default AcercaDe;