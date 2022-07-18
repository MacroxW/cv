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
        stars: 4,
    },
    {
        name: 'HTML/JS ',
        stars: 4,
    },
    {
        name: 'Bootstrap/Material-UI',
        stars: 4,
    },
    {
        name: 'Css/Scss/Sass',
        stars: 4,
    },
    {
        name: 'C#',
        stars: 4,
    },
    {
        name: 'ASP.NET MVC y WebForms',
        stars: 4,
    },
    {
        name: 'MySQL, MsSQL',
        stars: 4,
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
        stars: 4,
    },

]


const Skills = () => {
    return (<div>
        <ul className="skills-list row list-group list-group-flush">


            {
                skills.map((object) => {
                    
                    return (

                        <li className="list-group-item col-5" key={object.name}>
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