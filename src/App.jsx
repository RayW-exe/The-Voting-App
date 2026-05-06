import { Routes, Route} from "react-router-dom"
import VotingPage from "./Pages/Voting-page"  
import AboutPage from "./Pages/About-Page"
import LoginSignUpPage from "./Pages/Login-SignUp-page"
import { HashRouter as Router } from "react-router-dom"


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/voting" element={<VotingPage />} />
          <Route path="/" element={<LoginSignUpPage />} />
        </Routes>
    </Router>
  );
}

export default App;




