import { Link } from "react-router-dom"
import bannerImg from "../assets/images/profile/banner.png"
import dpImg from "../assets/images/profile/dp.png"
import { UserContext } from "../context/UserContext"
import { useContext } from "react"

const ProfileBio = () => {

    const {userProfile} = useContext(UserContext);

  return (
    <div>
        <div className="banner">
            <img src={bannerImg} alt="banner"/>
            <div id="dp">
            <img src={dpImg} alt="DP"/>
            <Link to={`/edit-page`}>
                <span className="edit">
                    Edit profile
                </span>
            </Link>
        </div>
        </div>
        <div className="bio">
            <h3 id="user-name">
                {userProfile.name}
            </h3>
            <p id="about">
                {userProfile.bio}
            </p>
        </div>
    </div>
  )
}

export default ProfileBio