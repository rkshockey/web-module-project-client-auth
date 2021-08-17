import axios from 'axios';

function axiosWithAuth (){
    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'http://localhost:5000/api/'
    })
}

export default axiosWithAuth