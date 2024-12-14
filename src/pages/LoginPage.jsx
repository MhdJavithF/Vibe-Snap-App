import bgImg from "../assets/images/login/bg.png";
import vibeImg from "../assets/images/login/vibe.png";
import { FcGoogle } from "react-icons/fc";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../services/firebase.js";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

const LoginPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const {userProfile} = useContext(UserContext);


  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setUser(data.user);
        
        const isNewUser = data.additionalUserInfo.isNewUser;

        if (isNewUser) {
          navigate("/create-page");
        } else {
          navigate("/feed");
        }
      })
      .catch((error) => {
        console.error("Login failed", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        const profile = localStorage.getItem("userProfile");

        if (userProfile.name) {
          navigate("/feed");
        } 
        else {
          navigate("/create-page");
        }
      } else {
        console.log("No user is signed in.");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

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
          <button onClick={handleLogin}>
            <FcGoogle />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;