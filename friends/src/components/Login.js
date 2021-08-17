import React from 'react';
import { useForm } from '../hooks/customHooks';
import axios from 'axios'
import { connect } from 'react-redux';

import { login } from '../actions/authActions';

const initialCredentials = {
    username: '',
    password: ''
};

function Login (props){
    const [credentials, setCredentials] = useForm(initialCredentials);

    function handleSubmit (e){
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                props.login()
            })
            .catch(err => console.log(err))
    }

    return <div className='login'>
        <h2>Login</h2>
        <form>
            <div className='form'>
                <label htmlFor='username'>username:  </label>
                <input id='username' name='username' value={credentials.username} onChange={setCredentials} />
            </div>
            <div className='form'>
                <label htmlFor='password'>password:  </label>
                <input id='password' name='password' value={credentials.password} onChange={setCredentials} />
            </div>
                <button className='form' onClick={handleSubmit}>Submit</button>
        </form>
    </div>
}

export default connect(null, {login})(Login)