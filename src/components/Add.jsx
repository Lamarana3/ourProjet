import axios from 'axios';
import React, { useState } from 'react';

const Add = () => {
    const [inputData, setInputData] = useState({name:'', email:''})

    const navigat = useNavigate();

    function handleSubmit(event) {
        event.preventDefault()

        axios.post('', inputData)
        .then(res => {
            alert("Ajout a reussit");
            navigat('/');
        }).catch(err => console.log(err));
    }
    return (
        <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-light p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">NOM:</label>
                        <input type="text" name='name' className='form-control' 
                        onChange={e=>setInputData({...inputData, name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="name">Email:</label>
                        <input type="email" name='email' className='form-control' 
                        onChange={e=>setInputData({...inputData, email: e.target.value})}/>
                    </div><br/>
                    <button className='btn btn-info'>Ajouter</button>
                </form>
            </div>
            
        </div>
    );
};

export default Add;