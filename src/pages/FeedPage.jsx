import AddPost from "../components/AddPost"
import DpImg from "../assets/images/profile/dp.png"
import UserDp from "../assets/images/feed/user1.png"
import PostImg1 from "../assets/images/feed/1post1.png"
import PostImg2 from "../assets/images/feed/1post2.png"
import { BiSolidNavigation } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import "../styles/feed.css"
import { Link } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../services/firebase"
import { useNavigate } from "react-router-dom"
import "../styles/popup.css"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import ShareBox from "../components/ShareBox"

const FeedPage = () => {

    const {userProfile} = useContext(UserContext);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showShareBox, setShowShareBox] = useState(false);
    const [feedData, setFeedData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/MOCK_DATA.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => setFeedData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    

    const handleLogout = () => {
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
            <div className="feed-rec">
                <div className="feed-head">
                    <div className="account">
                        <img src={UserDp} alt="user"/>
                    </div>
                    <div className="user">
                        <p id="user-name">Aarav</p>
                        <p id="time">2 hours ago</p>
                    </div>
                </div>
                <div className="content">
                    <p>
                    Just arrived in New York City! Excited to explore the sights, sounds, and energy of this amazing place. 🗽 <span>#NYC #Travel</span>
                    </p>
                </div>
                <div className="post">
                    <img src={PostImg1} alt="post"/>
                    <img src={PostImg2} alt="post"/>
                </div>
                <div className="actions">
                    <div className="like">
                        <HiHeart/>
                        <span>40</span>
                    </div>
                    <div className="share" onClick={toggleShareBox}>
                        <BiSolidNavigation />
                        <p>Share</p>
                    </div>
                </div>
            </div>

            <div className="feed-rec">
                <div className="feed-head">
                    <div className="account">
                        <img src={UserDp} alt="user"/>
                    </div>
                    <div className="user">
                        <p id="user-name">Aarav</p>
                        <p id="time">2 hours ago</p>
                    </div>
                </div>
                <div className="content">
                    <p>
                    Just arrived in New York City! Excited to explore the sights, sounds, and energy of this amazing place. 🗽 <span>#NYC #Travel</span>
                    </p>
                </div>
                <div className="post">
                    <img src={PostImg1} alt="post"/>
                    <img src={PostImg2} alt="post"/>
                </div>
                <div className="actions">
                    <div className="like">
                        <HiHeart/>
                        <span>40</span>
                    </div>
                    <div className="share">
                        <BiSolidNavigation />
                        <p>Share</p>
                    </div>
                </div>
            </div>
        </div>
        <div class={`overlay ${showShareBox ? "active" : ""}`}></div>
        <AddPost/>
        {showShareBox && <ShareBox onClose={toggleShareBox} />}
    </div>
  )
}

export default FeedPage