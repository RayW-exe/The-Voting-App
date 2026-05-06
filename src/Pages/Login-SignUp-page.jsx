import { Link } from "react-router-dom";
import { app } from "../firebase";
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function LoginSignUpPage() {
    const navigate = useNavigate();
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loginError,setLoginError] = useState("")

    const auth = getAuth(app);
    
    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("SignUp Done");
            navigate("/voting")
        } catch (error) {
            setLoginError(error.message);
        }
    }

    const handleLogin = async(e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Login Successful");
            navigate("/voting")
            
        } catch (error) {
            console.log(error.code)
        }
    }
    const handleLoginWithGoogle = async(e) => {
        e.preventDefault()
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            console.log("Login Successful");
            navigate("/voting")
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
      <>
      <div className="bg-gray-200 min-h-screen p-4 flex flex-col items-center justify-center">
            <div className="max-w-4xl bg-white p-8 rounded-xl shadow-lg md:w-3/4 space-y-4">
                <div className="text-3xl font-bold mb-4 align-middle text-center">
                    <h1>LOGIN / SIGN UP</h1>
                </div>
                <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <input type="email" 
                            name="email" 
                            placeholder="Enter Email..." 
                            value={ email }
                            onChange={ (e) => setEmail(e.target.value) }
                            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <p className="text-red-500 text-sm mt-1">{loginError}</p>
                        </div>

                        <div className="mb-4">
                            <input type="password" 
                            name="password" 
                            placeholder="Enter Password..." 
                            value={password}
                            onChange={ (e) => setPassword(e.target.value) }
                            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <p className="text-red-500 text-sm mt-1">{loginError}</p>
                        </div>

                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200">Login</button>
                    </form>
                    <div className="items-center justify-center">
                        <button onClick={handleSignUp} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200">Sign Up</button><br />
                        <button onClick={ handleLoginWithGoogle} className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 py-2 rounded-lg transition">
                            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
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

export default LoginSignUpPage