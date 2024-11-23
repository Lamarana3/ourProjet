import React from 'react';
import '../components/headertwo.css'
import { 
    BiBookAlt, 
    BiHelpCircle, 
    BiHome, 
    BiMessage, 
    BiSolidReport, 
    BiStats, 
    BiTask 
} from "react-icons/bi";


const Headertwo = () => {
    return (
        
        <div className='menu'>
            <div className='logo'>
                <BiBookAlt className='logo-icon' />
                <h2>EduCode</h2>
            </div>

            <div className='menu--list'>
                <a href="#" className="item">
                    <BiHome className='icon' />
                    Dahboard
                </a>
                <a href="#" className="item">
                    <BiTask  className='icon'/>
                    Assignment
                </a>
                <a href="#" className="item">
                    <BiSolidReport  className='icon'/>
                    Report
                </a>
                <a href="#" className="item">
                    <BiStats  className='icon'/>
                    Stats
                </a>
                <a href="#" className="item">
                    <BiMessage  className='icon'/>
                    Message
                </a>
                <a href="#" className="item">
                    <BiHelpCircle  className='icon'/>
                    Help
                </a>

            </div>
        
        </div>
            
        
    );
};

export default Headertwo;