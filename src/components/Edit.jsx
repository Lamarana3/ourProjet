import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const {id} = useParams();
    const [data, setData] = useState([])
    const navigate = useNavigate()



    useEffect(()=>{
        axios.get('/'+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    function handleSubmit(event) {
        event.preventDefault()
        axios.put('/'+id, data)
        .then(res => {
            alert("Modification reussit");
            navigate('/')

        })
    }


    return (
        <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-light p-5'>
                <form onSubmit={handleSubmit}>
                <div>
                        <label htmlFor="name">ID:</label>
                        <input type="text" disabled name='name' value={data.id} className='form-control' 
                        />
                    </div>
                    <div>
                        <label htmlFor="name">NOM:</label>
                        <input type="text" name='name' value={data.name} className='form-control' 
                        onChange={e => setData({...data, name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="name">Email:</label>
                        <input type="email" name='email' value={data.email} className='form-control' 
                        onChange={e => setData({...data, email: e.target.value})}/>
                    </div><br/>
                    <button className='btn btn-info'>Modifier</button>
                </form>
            </div>
            
        </div>
    );
};

export default Edit;