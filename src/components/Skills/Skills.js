import React from 'react';
import Rating from '@material-ui/lab/Rating';

import './Skills.scss';

const skills = [
    {
        name: 'ReactJs',
        stars: 4.5,
    },
    {
        name: 'Css/Scss/Sass',
        stars: 5,
    },
    {
        name: 'HTML/JS ',
        stars: 5,
    },
    {
        name: 'Bootstrap/Material-UI',
        stars: 5,
    },
    {
        name: 'Css/Scss/Sass',
        stars: 5,
    },
    {
        name: 'C#',
        stars: 5,
    },
    {
        name: 'ASP.NET MVC y WebForms',
        stars: 5,
    },
    {
        name: 'MySQL, MsSQL',
        stars: 5,
    },
    {
        name: 'PHP/Laravel',
        stars: 3,
    },
    {
        name: 'Java Android',
        stars: 4,
    },
    {
        name: 'C++',
        stars: 3,
    },
    {
        name: 'Git',
        stars: 5,
    },

]


const Skills = () => {
    return (<div>
        <ul className="skills-list row list-group list-group-flush">


            {
                skills.map((object) => {
                    
                    return (

                        <li className="list-group-item col-5">
                            <div className="skill-name">
                                {object.name}
                            </div>

                            <Rating
                                precision={0.5}
                                name="read-only"
                                value={object.stars}
                                readOnly />
                        </li>
                    )
                })
            }



        </ul>
    </div>);
}

export default Skills;