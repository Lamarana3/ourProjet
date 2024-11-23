import React from 'react';
import Sidebare from '../components/Sidebare';
import Content from '../components/Content';
import Profile from '../components/Profile';
import '../pages/tableau.css';

const Tableau = () => {
    return (
        <div className='dashboard'>
            <Sidebare />
            <div className="dashboard--content">
                
                <Content />
                <Profile />
            </div>
            
        </div>
    );
};

export default Tableau;