import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'

import Loading from './Loading'

function Friends (props) {
    const [friends, setFriends] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axiosWithAuth().get('friends')
            .then(res => {
                setFriends(res.data)
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
        <h2>Friends</h2>
        <div className='friends'>
            {friends.map(friend => {
                const url = `/friends/${friend.id}`
                return(<div className='friend-stub' key={friend.id}>
                    <Link to={url} className='link'>
                        <p>{friend.name}</p>
                    </Link>
                </div>)
            })}
        </div>
        <Link to='/new-friend' className='new'>Add New Friend</Link>
    </div>
}

export default Friends