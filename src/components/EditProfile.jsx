import { Link } from "react-router-dom";
import bannerImg from "../assets/images/profile/banner.png";
import dpImg from "../assets/images/profile/dp.png";
import "../styles/profile.css";
import { FaArrowLeft } from "react-icons/fa6";
import { HiPencil } from "react-icons/hi";
import { useContext, useRef } from "react";
import { UserContext } from "../context/UserContext";

const EditProfile = ({ pageType }) => {
  const userNameRef = useRef();
  const bioRef = useRef();
  const { userProfile, setUserProfile } = useContext(UserContext);

  const handleUserAccount = () => {
    setUserProfile({
      name: userNameRef.current.value,
      bio: bioRef.current.value,
    });
  };

  return (
    <div className="profile-wrapper pages">
      <span className="back">
        <Link to={`/profile-page`}>
          <FaArrowLeft />
        </Link>
        <span>{pageType === "create" ? "Create Profile" : "Edit Profile"}</span>
      </span>
      <div className="banner">
        <img src={bannerImg} alt="banner" />
        <div className="edit-icon">
          <HiPencil />
        </div>
        <div id="dp">
          <img src={dpImg} alt="DP" />
          <div className="dp edit-icon">
            <HiPencil />
          </div>
        </div>
      </div>
      <div className="edit-wrap">
        <div className="new-name">
          <p>Name</p>
          <input
            ref={userNameRef}
            id="user-name"
            type="text"
            defaultValue={userProfile.name}
          />
        </div>
        <div className="my-bio">
          <p>Bio</p>
          <textarea
            ref={bioRef}
            id="about"
            defaultValue={userProfile.bio}
          ></textarea>
        </div>
        <Link to={`/profile-page`}>
          <button className="save" onClick={handleUserAccount}>
            Save
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EditProfile;