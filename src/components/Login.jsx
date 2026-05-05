import React from "react";

function Login() {
    return(
        <>
        <header>
            <nav class="navbar">
                <h2><a href="index.html">L&F</a></h2>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="aboutMe.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="signup.html">Sign up</a></li>
                    <li><a href="login.html">Login</a></li>
                </ul>
            </nav>
        </header>
        <section className="container">
            <form onSubmit={} id="login_form">
                <div id="login_success"></div>
                <h2>LOGIN</h2>
                <div>
                    <label for="login_email">
                        <svg xmlns="http://www.w3.org/2000/svg" style="height: 24;" viewBox="0 0 640 640"><path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z"/></svg>
                    </label>
                    <input type="email" name="email" id="login_email" placeholder="Email" />
                    <p id="login_email_error"></p>
                </div>
                <div>
                    <label for="login_password"><svg xmlns="http://www.w3.org/2000/svg" style="height: 24;" viewBox="0 0 640 640"><path d="M256 160L256 224L384 224L384 160C384 124.7 355.3 96 320 96C284.7 96 256 124.7 256 160zM192 224L192 160C192 89.3 249.3 32 320 32C390.7 32 448 89.3 448 160L448 224C483.3 224 512 252.7 512 288L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 288C128 252.7 156.7 224 192 224z"/></svg></label>
                    <input type="password" name="password" id="login_password" placeholder="Password" />
                    <p id="login_password_error"></p>
                </div>
                <button type="submit">Login</button>
                <p>New here? <a href="signup.html">Create an account</a></p>
            </form>
        </section>
        </>
        
        
    )
}
