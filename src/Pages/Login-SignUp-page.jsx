import { Link } from "react-router-dom";
import { app } from "../firebase";
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function LoginSignUpPage() {
    const navigate = useNavigate();
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
            navigate("/voting")
        } catch {
            setErrors({ form: "Error signing up. Please try again." });
            setSuccess("");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSuccess("Login submitted")
        setErrors({})
        navigate("/voting")
    }
    return (
      <>
      <div className="bg-gray-200 min-h-screen p-4 flex flex-col items-center justify-center">
            <div className="max-w-4xl bg-white p-8 rounded-xl shadow-lg md:w-3/4 space-y-4">
                <div className="text-3xl font-bold mb-4 align-middle text-center">
                    <h1>LOGIN / SIGN UP</h1>
                </div>
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

                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200">Login</button>
                            {success && <p className="text-green-600 text-center mt-4 font-medium">{success}</p>}
                    </form>
                    <div className="items-center justify-center">
                        <button onClick={handleSignUp} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200">Sign Up</button><br />
                        <button onClick={() => signInWithPopup(auth, new GoogleAuthProvider())} className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 py-2 rounded-lg transition">
                            <img src="https://www.svgrepo.com/show/355037/google.svg" class="w-5 h-5" alt="Google" />
                            Sign in with Google
                        </button>
                    </div>
                    <div className="text-center pt-4"> 
                        <Link to="/" className="text-sm text-gray-500 hover:text-gray-800 transition-colors duration-200 flex items-center justify-center gap-1">Go Back</Link>
                    </div>
            </div>
      </div> 
      </>
    );
}

export default LoginSignUpPage;