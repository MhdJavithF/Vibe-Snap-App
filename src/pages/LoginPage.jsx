import bgImg from "../assets/images/login/bg.png"
import googleImg from "../assets/images/login/google.png"
import vibeImg from "../assets/images/login/vibe.png"
import "../styles/login.css";

const LoginPage = () => {
  return (
    <div className="login-wrap pages">
      <div className="bg-cover">
        <img src={bgImg} alt="background"/>
      </div>
      <div className="rectangle">
        <div className="vibe">
          <img src={vibeImg} alt="background"/>
        </div>
        <div className="google">
          <img src={googleImg} alt="background"/>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;