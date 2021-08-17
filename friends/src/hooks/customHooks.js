import {useState} from 'react'

export const useForm = (initialValues) => {
    const [formValues, setFormValues] = useState(initialValues)

    function handleChange (e){
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    return [formValues, handleChange]
}