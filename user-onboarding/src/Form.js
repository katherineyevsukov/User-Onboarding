import axios from 'axios';
import React, {  useState, useEffect } from 'react';
import schema from './formSchema';
import * as yup from 'yup';

const initialFormValues = {
    name: '',
    email: '',
    password: '',
    status:'',
    age:'',
    terms: false,
    newsletter: false,
}

const initialFormErrors = {
    name: '',
    email: '',
    password: '',
    status: '',
    age: '',
    terms: '',
}


export default function Form({ setUsers, users }){
const [formValues, setFormValues] = useState(initialFormValues)
const [disabled, setDisabled] = useState(true)
const [formErrors, setFormErrors] = useState(initialFormErrors)

const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
}

const handleChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = (type === 'checkbox' ? checked : value)
    validate(name, valueToUse)
    setFormValues({
        ...formValues, [name]: valueToUse
    })
}

useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

const postNewUser = newUser => {

    axios.post('https://reqres.in/api/users', newUser)
        .then(res => {
            console.log('POST users data', res.data)
            console.log('POST users', res)
            setUsers([res.data, ...users])
        }).catch(err=> console.error(err))
        setFormValues(initialFormValues)
}

const formSubmit = evt => {
    evt.preventDefault()
    const newUser = {
        id: Date.now() * Math.random(),
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        status: formValues.status,
        age: formValues.age,
        agreements: ['terms', 'newsletter'].filter(agreement => !!formValues[agreement])
    }

    postNewUser(newUser)
    // console.log(newUser)
}

    return(
        <div>
        <h2>Form</h2>
        <form onSubmit={formSubmit}>
            <label>Name:
                <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                />
            </label>
            <label>Email:
                <input 
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                />
            </label>
            <label>Password:
                <input
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                />
            </label>

            <label>Student
                <input
                    type="radio"
                    name="status"
                    value="student"
                    checked={formValues.status === "student"}
                    onChange={handleChange}
                />
            </label>
            <label>Teacher
                <input
                    type="radio"
                    name="status"
                    value="teacher"
                    checked={formValues.status === "teacher"}
                    onChange={handleChange}
                />
            </label>

            <label>Age:
                <select
                    name="age"
                    value={formValues.age}
                    onChange={handleChange}
                >
                    <option value=''>--Choose your age range--</option>
                    <option value='18-25'>18-25</option>
                    <option value='26-35'>26-25</option>
                    <option value='36-45'>36-45</option>
                    <option value='46-55'>46-55</option>
                    <option value='56+'>56+</option>
                </select>
            </label>


            <label>I agree to the terms & conditions
                <input
                    type="checkbox"
                    name="terms"
                    checked={formValues.terms}
                    onChange={handleChange}
                />
            </label>
            <label>Sign up for newsletter
                <input
                    type="checkbox"
                    name="newsletter"
                    checked={formValues.newsletter}
                    onChange={handleChange}
                />
            </label>
            <button id='submit-button'
            disabled={disabled}>
            
                Submit</button>
            <div className='errors'>
            <div>{formErrors.name}</div>
            <div>{formErrors.email}</div>
            <div>{formErrors.password}</div>
            <div>{formErrors.status}</div>
            <div>{formErrors.age}</div>
            <div>{formErrors.terms}</div>
            </div>
        </form>
        </div>
    )
}


