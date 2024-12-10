import bgImg from "../assets/images/login/bg.png"
import googleImg from "../assets/images/login/google.png"
import vibeImg from "../assets/images/login/vibe.png"
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth,provider } from "../services/firebase";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";

const LoginPage = () => {

  const [user, setUser] = useState('');
  const navigate = useNavigate();
  // const isAlreadyUser = true;
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setUser(data.user.email);
        navigate('/create-page'); // Redirect after successful login
      })
      .catch((error) => {
        console.error("Login failed", error);
      });
  }

  return (
    <div className="login-wrap pages">
      <div className="bg-cover">
        <img src={bgImg} alt="background"/>
      </div>
      <div className="rectangle">
        <div className="vibe">
          <img src={vibeImg} alt="background"/>
        </div>     
        {/* <Link to={`/create-page`}> */}
          <div className="google">
            <img src={googleImg} alt="background" onClick={handleLogin}/>
          </div>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default LoginPage;