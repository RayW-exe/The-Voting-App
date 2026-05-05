import React from "react";

function Login() {
    const [form,setForm] = useState({
            email:"",
            password:"",
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
            let validEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

            if(!form.email){
                messages.email = "Email is required"
            }else if(!validEmail.test(form.email)){
                messages.email = "Enter a valid email"
            }
            if(!form.password){
                messages.password = "password is required"
            }else if(form.password.length < 6){
                messages.password = "Password should have at least 6 characters"
            }
            
            if(Object.keys(messages).length > 0){
                setErrors(messages)
                setSuccess("")
            }else{
                setErrors({})
                setSuccess("Logged in")
            }
        }
    return(
        <>
        
        <form onSubmit={handleSubmit}>
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
               
                <button type="submit">Login</button>
                 {success && <p className="login_success">{success}</p>}
            </form>
        </>
        
        
    )
}
