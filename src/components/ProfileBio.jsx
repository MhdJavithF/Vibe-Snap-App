import bannerImg from "../assets/images/profile/banner.png"
import dpImg from "../assets/images/profile/dp.png"

const ProfileBio = () => {
  return (
    <div>
        <div className="banner">
            <img src={bannerImg} alt="banner"/>
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
    </div>
  )
}

export default ProfileBio