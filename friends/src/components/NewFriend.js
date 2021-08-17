import React, {useState} from 'react'

import axiosWithAuth from '../utils/axiosWithAuth'
import { useForm } from '../hooks/customHooks'
import Loading from './Loading'

const initialValues = {
    name: '',
    email: '',
    age: 0
}

function NewFriend (){
    const [formValues, setFormValues] = useForm(initialValues)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    function handleClick (e){
        e.preventDefault()
        setIsLoading(true)
        setError('')
        const newFriend = {
            name: formValues.name,
            age: Number(formValues.age),
            email: formValues.email,
            id: Date.now()
        }
        console.log(newFriend)
        axiosWithAuth().post('friends', newFriend)
            .then(res => {
                console.log(res)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
                setError("We couldn't add your friend, sorry!")
            })
    }

    if (isLoading){
        return <Loading />
    }

    return <div>
        <h2>Add ANew Friend</h2>
        <form className='new-friend'>
            <div className='form'>
                <label htmlFor='name'>Name: </label>
                <input id='name' name='name' value={formValues.name} onChange={setFormValues} />
            </div>
            <div className='form'>
                <label htmlFor='email'>Emial: </label>
                <input id='email' name='email' type='email' value={formValues.email} onChange={setFormValues} />
            </div>
            <div className='form'>
                <label htmlFor='age'>Age: </label>
                <input id='age' name='age' type='number' value={formValues.age} onChange={setFormValues} />
            </div>
            <button className='form' onClick={handleClick}>Submit</button>
        </form>
        {error}
    </div>
}

export default NewFriend