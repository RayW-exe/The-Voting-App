import { app } from "../firebase";
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";


function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errors,setErrors] = useState({})
    const [success,setSuccess] = useState("")

    const auth = getAuth(app);
    
    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess("User signed up successfully");
            setErrors({});
        } catch {
            setErrors({ form: "Error signing up. Please try again." });
            setSuccess("");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSuccess("Login submitted")
        setErrors({})
    }

    return(
        <>
        
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <input type="email" 
                name="email" 
                placeholder="Enter Email..." 
                value={ email }
                onChange={ (e) => setEmail(e.target.value) }
                className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus;ring-blue-400"
                />
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            </div>

            <div className="mb-4">
                <input type="password" 
                name="password" 
                placeholder="Enter Password..." 
                value={password}
                onChange={ (e) => setPassword(e.target.value) }
                className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus;ring-blue-400"
                />
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            </div>

                <button type="submit">Login</button>
                 {success && <p className="text-green-600 text-center mt-4 font-medium">{success}</p>}
            </form>
            <button onClick={handleSignUp}>Sign Up</button>
            <button onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}>
                Sign in with Google
            </button>
        </>
        
        
    )
}
export default Login