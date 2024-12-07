import bannerImg from "../assets/images/profile/banner.png"
import dpImg from "../assets/images/profile/dp.png"
import designImg from "../assets/images/profile/design.png"
import parachuteImg from "../assets/images/profile/parachute.png"
import workImg from "../assets/images/profile/work.png"
import { FaCirclePlus, FaArrowLeft } from "react-icons/fa6";
import "../styles/profile.css"


const ProfilePage = () => {
  return (
    <div className='profile-wrapper pages'>
        <div className="banner">
            <img src={bannerImg} alt="banner"/>
            <div className="back"><FaArrowLeft /></div>
            <div id="dp">
            <img src={dpImg} alt="DP"/>
            <span className="edit">
                Edit profile
            </span>
        </div>
        </div>
        <div className="bio">
            <h3 id="user-name">
                Sakshi Agarwal
            </h3>
            <p id="about">
            Just someone who loves designing, sketching, and finding beauty in the little things 💕
            </p>
        </div>
        <div className="post-wrapper">
            <p>My post</p>
            <div className="posts">
                <div className="post">
                    <img src={designImg} alt="design"/>
                    {/* <span>Design meet</span> */}
                </div>
                <div className="post"><img src={workImg} alt="design"/></div>
                <div className="post"><img src={parachuteImg} alt="design"/></div>
                <div className="post"><img src={designImg} alt="design"/></div>
            </div>
        </div>
        <div className="add">
            <FaCirclePlus />
        </div>
    </div>
    
  )
}

export default ProfilePage