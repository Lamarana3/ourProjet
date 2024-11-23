import React from 'react';
import { BiBuilding, BiLogoAndroid, BiLogoHtml5 } from 'react-icons/bi';
import '../components/content.css';

const course = [
    {
        title: 'Developpement Web',
        duration: '2 heures',
        icon: <BiLogoHtml5 />,
        
    },
    {
        title: 'Developpeme App',
        duration: '4 heures',
        icon: <BiLogoAndroid />,
        
    },
    {
        title: 'UX et UI',
        duration: '2 heures',
        icon: <BiBuilding />,
        
    },
];


const Card = () => {
    return (
        <div className='card--container'>
            {course.map((item) => (
                <div className="card">
                    <div className="card--cover">{item.icon}</div>
                    <div className="card--title">{item.title}</div>
                </div>
            ))}

            
        </div>
    );
};

export default Card;