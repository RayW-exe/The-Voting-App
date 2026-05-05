import React, { use } from "react";
import { useState } from "react";

function SignUp(){
    const [form,setForm] = useState({
        fName:"",
        email:"",
        password:"",
        repeatPassword:""
    })
    const [errors,setErrors] = useState({})
    const [success,setSuccess] = useState({})
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        let messages = ""

        if(!form.fName){
            messages.fName =  "First name is required"
        }
        if(!form.email){
            messages.email = "Email is required"
        }
        if(!form.password){
            messages.password = "password is required"
        }else if(form.password.length < 6){
            messages.password = "Password should have at least 6 characters"
        }
        if(!form.repeatPassword !== form.password){
            messages.repeatPassword = "Passwords do not match"
        }
        if(!form.repeatPassword){
            messages.repeatPassword = "Repeat password is required"
        }
        if(Object.keys(messages).length > 0){
            setErrors(messages)
            setSuccess("")
        }else{
            setErrors({})
            setSuccess("Account created successfully")
        }
    }
    return(
        <>

            <form onSubmit={handleSubmit}>
                <input type="text" 
                name="fName" 
                placeholder="First Name" 
                value={form.fName}
                onChange={handleChange} 
                />
                <p className="error_message">{errors.fName}</p>

                <input type="email" 
                name="email" 
                placeholder="Email" 
                value={form.email}
                onChange={handleChange} 
                />
                <p className="error_message">{errors.email}</p>

                <input type="password" 
                name="password" 
                placeholder="Password" 
                value={form.password}
                onChange={handleChange} 
                />
                <p className="error_message">{errors.password}</p>
                
                <input type="password" 
                name="repeatPassword" 
                placeholder="Repeat Password" 
                value={form.repeatPassword}
                onChange={handleChange} 
                />
                <p className="error_message">{errors.repeatPassword}</p>

                <button type="submit">Sign Up</button>
                 {success && <p className="signup_success">{success}</p>}
            </form>
        </>
    )
}