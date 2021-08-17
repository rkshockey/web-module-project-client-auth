import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/authActions';
import axiosWithAuth from '../utils/axiosWithAuth';

function Logout (props){
    console.log(props)

    useEffect(() => {
        axiosWithAuth().post('logout')
            .then(() => {
                localStorage.removeItem('token')
                props.logout()
                props.history.push('/login')
            })
            .catch(err => {
                console.log(err)
                props.history.push('/login')
            })
    }, [])

    return null
}

export default connect(null, {logout})(Logout);