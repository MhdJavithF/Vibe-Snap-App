import bgImg from "../assets/images/login/bg.png";
import googleImg from "../assets/images/login/google.png";
import vibeImg from "../assets/images/login/vibe.png";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../services/firebase.js";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";


const LoginPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setUser(data.user);
        navigate('/feed'); // Redirect after successful login
      })
      .catch((error) => {
        console.error("Login failed", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("Current user:", user);
        setUser(currentUser);
        navigate('/feed');
      } else {
        console.log("No user is signed in.");
      }
    });

    return () => unsubscribe();
  }, [navigate,user]);


  return (
    <div className="login-wrap pages">
      <div className="bg-cover">
        <img src={bgImg} alt="background" />
      </div>
      <div className="rectangle">
        <div className="vibe">
          <img src={vibeImg} alt="background" />
        </div>
        <div className="google">
          <img src={googleImg} alt="background" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
