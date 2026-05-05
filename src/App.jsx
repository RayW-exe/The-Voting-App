import { Routes, Route} from "react-router-dom"
import VotingPage from "./Pages/Voting-page"  
import AboutPage from "./Pages/About-Page"
import LoginSignUpPage from "./Pages/Login-SignUp-page"

function App() {
  return (
    <Routes>
      <Route path="/voting" element={<VotingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<LoginSignUpPage />} />
    </Routes>
  );
}

export default App;




