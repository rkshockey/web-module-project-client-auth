import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'

import Loading from './Loading'

function Friend (){
    const [friend, setFriend] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const {id} = useParams()
    const url = `friends/${id}`
    
    useEffect(() => {
        setIsLoading(true)
        axiosWithAuth().get(url)
            .then(res => {
                setFriend(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }, [])

    if (isLoading){
        return <Loading />
    }

    return <div>
        <div className='friend'>
            <h3>{friend.name}</h3>
            <p>is {friend.age} years old</p>
            <p>and can be reached at {friend.email}</p>
        </div>
        <Link to='/new-friend' className='new'>Add New Friend</Link>
    </div>
}

export default Friend