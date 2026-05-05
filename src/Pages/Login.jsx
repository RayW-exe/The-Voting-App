import React from "react";

function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loginError,setLoginError] = useState("")

    const auth = getAuth(app);
    
    const handleSignUp = async (e) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("User signed up successfully");
        } catch (error) {
            console.log("Error signing up:", error);
        }
    }

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

                <button type="submit">Login</button>
                 {success && <p className="text-green-600 text-center mt-4 font-medium">{success}</p>}
            </form>
            <button>Sign Up</button>
            <button onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}>
                Sign in with Google
            </button>
        </>
        
        
    )
}
export default Login