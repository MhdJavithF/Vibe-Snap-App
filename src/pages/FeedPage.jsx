import AddPost from "../components/AddPost"
import DpImg from "../assets/images/profile/dp.png"
import "../styles/feed.css"
import { Link } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../services/firebase"
import { useNavigate } from "react-router-dom"
import "../styles/popup.css"
import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
import ShareBox from "../components/ShareBox"
import LikeButton from "../components/LikeButton"
import InfiniteScrollComponent from "../components/InfiniteScrollComponent"

const FeedPage = () => {

    const {userProfile} = useContext(UserContext);
    const { resetUserProfile } = useContext(UserContext);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showShareBox, setShowShareBox] = useState(false);
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.clear();

        resetUserProfile();

        signOut(auth)
          .then(() => {
            // alert("Successfully logged out!");
            navigate('/');
          })
          .catch((error) => {
            console.error("Logout failed", error);
          });
    }

    const openConfirmation = () => {
        setShowConfirmation(true);
    };
    
    const closeConfirmation = () => {
        setShowConfirmation(false);
    };

    const toggleShareBox = () => {
        setShowShareBox(!showShareBox);
    };
    
  return (
    <div className={`feed-wrapper pages ${showShareBox ? "active" : ""}`}>
        <div className="head">
            <Link to={`/profile-page`}>
                <div className="account">
                    <img src={DpImg} alt="user"/>
                </div>
            </Link>
            <div className="welc">
                <p>Welcome Back,</p>
                <p id="user-name">{userProfile.name}</p>
            </div>
            {/* <Link to={`/`}> */}
                <button className="logout" onClick={openConfirmation}>Logout</button>
                {showConfirmation && (
                    <div className="popup">
                        <div className="popup-content">
                            <p>Do you want to logout?</p>
                            <button onClick={handleLogout}>Yes</button>
                            <button onClick={closeConfirmation}>No</button>
                        </div>
                    </div>
                )}
            {/* </Link> */}
        </div>

        <div className="feeds-wrap">
            <p className="title">Feeds</p>
            
            <InfiniteScrollComponent share={toggleShareBox}/>

        </div>
        <div class={`overlay ${showShareBox ? "active" : ""}`}></div>
        <AddPost label='feed'/>
        {showShareBox && <ShareBox onClose={toggleShareBox} />}
    </div>
  )
}

export default FeedPage