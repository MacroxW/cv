import React from 'react';
import './BaseCard.scss';
const BaseCard = ({ title, body }) => {
    return (
        <section className="BaseCard">
            <div className="row">
                <div className="myCard col">
                    <div className="card-title">
                        <h2> {title} </h2>
                    </div>
                    <div className="card-body row">
                        {body}
                    </div>
                </div>
            </div>
        </section>

    );
}

export default BaseCard;