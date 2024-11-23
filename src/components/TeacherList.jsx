import React from 'react';
import '../components/teacher.css';

const TeacherList = ({ onTeacherClick }) => {

    const handleTeacherClick = (teacher) => {
        setSelectedTeacher(teacher); 
    };

    const teachers = [
        {
            image: 'public/images/image.svg',
            name: 'Cheikh T.C Ndiaye',
            duration: '60 heures',
            cost: '100000/h',
        },
        {
            image: 'public/images/image.svg',
            name: 'Abdoulaye Mbaye',
            duration: '40 heures',
            cost: '100000/h',
        },
    ];
    return (
        <div className='teacher--list'>
            <div className="list--header">
                <h1>Formateurs</h1>
            </div>
            <div className="list--container">
                {teachers.map((teacher, index) => (
                    <div 
                        key={index}
                        className="list"
                        onClick={() => onTeacherClick(teacher)} // Passer le formateur sélectionné
                    >
                        <div className="teacher--detail">
                            <img src={teacher.image} alt={teacher.name} />
                            <h2>{teacher.name}</h2>
                        </div>
                        <span>{teacher.duration}</span>
                        <span>{teacher.cost}</span>
                        <span className='teacher--todo'>:</span>
                    </div>
                ))}

                    <TeacherList onTeacherClick={handleTeacherClick} />
            </div>
        </div>
    );
};

export default TeacherList;
