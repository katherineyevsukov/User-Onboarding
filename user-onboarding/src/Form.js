import React, {  useState, useEffect } from 'react'

export default function Form(){


    return(
        <div>
        <h2>Form</h2>
        <form>
            <label>Name:
                <input
                    type="text"
                    name="name"
                />
            </label>
            <label>Email:
                <input 
                    type="email"
                    name="email"
                />
            </label>
            <label>Password:
                <input
                    type="password"
                    name="password"
                />
            </label>

            <label>Student
                <input
                    type="radio"
                    name="status"
                    value="student"
                />
            </label>
            <label>Teacher
                <input
                    type="radio"
                    name="status"
                    value="teacher"
                />
            </label>

            <label>I agree to the terms & conditions
                <input
                    type="checkbox"
                    name="terms"
                />
            </label>
            
        </form>
        </div>
    )
}


// - [ ] Name
// - [ ] Email
// - [ ] Password
// - [ ] Terms of Service (checkbox)
// - [ ] A Submit button to send our form data to the server.