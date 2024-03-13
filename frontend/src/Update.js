import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    const {id} = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id, {name,phone,email})
        .then(res => {
            navigate('/');
        }).catch(err => console.log(err));
    }
    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update User</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input type="text" placeholder='Enter Name' className='from-contol' onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Phone</label>
                        <input type='text' placeholder='Enter phone' className='from-contol' onChange={e => setPhone(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type='email' placeholder='Enter Email' className='from-contol' onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update