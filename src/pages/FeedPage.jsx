import AddPost from "../components/AddPost"
import DpImg from "../assets/images/profile/dp.png"
import UserDp from "../assets/images/feed/user1.png"
import PostImg1 from "../assets/images/feed/1post1.png"
import PostImg2 from "../assets/images/feed/1post2.png"
import { BiSolidNavigation } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import "../styles/feed.css"
import { Link } from "react-router-dom"

const FeedPage = () => {
  return (
    <div className="feed-wrapper pages">
        <div className="head">
            <Link to={`/profile-page`}>
                <div className="account">
                    <img src={DpImg} alt="user"/>
                </div>
            </Link>
            <div className="welc">
                <p>Welcome Back,</p>
                <p id="user-name">Sakshi Agarwal</p>
            </div>
            <Link to={`/`}>
                <button className="logout">Logout</button>
            </Link>
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
                    <div className="share">
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
        <AddPost/>
    </div>
  )
}

export default FeedPage