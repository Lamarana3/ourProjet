import React from 'react';
import '../components/profile.css';
import { BiBook } from 'react-icons/bi';

const Profile = ({ selectedTeacher }) => {
    const courses = [
        {
            filiere: 'DFE',
            title: 'Reactjs',
            duration: '20 heures',
            icon: <BiBook />
        },
        {
            filiere: 'DBE',
            title: 'Angular',
            duration: '20 heures',
            icon: <BiBook />
        },
        {
            filiere: 'APD',
            title: 'Flutter',
            duration: '20 heures',
            icon: <BiBook />
        },
    ];

    if (!selectedTeacher) {
        return (
            <div className="profile">
                <h2>Sélectionnez un formateur pour voir ses détails</h2>
            </div>
        );
    }

    return (
        <div className='profile'>
            <div className="user--profile">
                <div className="user--detail">
                    <img src={selectedTeacher.image} alt={selectedTeacher.name} />
                    <h3 className='username'> {selectedTeacher.name} </h3>
                    <span className='profession'>Formateur</span>
                    <span>Durée : {selectedTeacher.duration}</span>
                    <span>Coût : {selectedTeacher.cost}</span>
                </div>
                <div className="user-courses">
                    {courses.map((course, index) => (
                        <div key={index} className="course">
                            <div className="course--detail">
                                <div className="course--cover">
                                    {course.icon}
                                </div>
                                <div className="course-name">
                                    <h5 className='title'>{course.filiere}</h5>
                                    <h5 className='title'>{course.title}</h5>
                                    <span className="duration">{course.duration}</span>
                                </div>
                            </div>
                            <div className="action">:</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
