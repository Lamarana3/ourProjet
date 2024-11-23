import React from 'react';
import ContentHeader from '../components/ContentHeader';
import '../components/content.css';
import Card from '../components/Card';
import TeacherList from '../components/TeacherList';

const Content = () => {
    return (
        <div className='content'>
            <ContentHeader />
            <Card />
            <TeacherList />
        </div>
    );
};

export default Content;