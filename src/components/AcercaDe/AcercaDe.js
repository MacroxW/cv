import React, { useEffect } from 'react';
import data from '../../assets/data.js';

const AcercaDe = () => {
    const { about } = data;
    return (
        <div className="AcercaDe">

            <h5>
                {about}
            </h5>
            <hr></hr>
        </div>);
}

export default AcercaDe;