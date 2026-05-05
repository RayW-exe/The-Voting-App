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
                    <div className="mb-4">
                        <input type="text" 
                        name="fName" 
                        placeholder="First Name" 
                        value={form.fName}
                        onChange={handleChange} 
                        className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus;ring-blue-400"
                        />
                        <p className="text-red-500 text-sm mt-1">{errors.fName}</p>
                    </div>

                    <div className="mb-4">
                        <input type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={form.email}
                        onChange={handleChange} 
                        className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus;ring-blue-400"
                        />
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    </div>

                    <div className="mb-4">
                        <input type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={form.password}
                        onChange={handleChange} 
                        className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus;ring-blue-400"
                        />
                        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    </div>

                    <div className="mb-4">
                        <input type="password" 
                        name="repeatPassword" 
                        placeholder="Repeat Password" 
                        value={form.repeatPassword}
                        onChange={handleChange} 
                        className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus;ring-blue-400"
                        />
                        <p className="text-red-500 text-sm mt-1">{errors.repeatPassword}</p>
                    </div>

                    <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-200">Sign Up</button>
                    
                    {success && <p className="text-green-600 text-center mt-4 font-medium">{success}</p>}
                </form>
        </>
    )
}
export default SignUp