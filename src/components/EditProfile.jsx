import { Link } from "react-router-dom";
import bannerImg from "../assets/images/profile/banner.png"
import dpImg from "../assets/images/profile/dp.png"
import "../styles/profile.css"
import { FaArrowLeft } from "react-icons/fa6";
import { HiPencil } from "react-icons/hi";



const EditProfile = ({ pageType }) => {
  return (
    <div className='profile-wrapper pages'>
        <a className="back">
          <Link to={`/profile-page`}><FaArrowLeft /></Link>
          <span>
            {pageType === "create" ? "Create Profile" : "Edit Profile"}
          </span>
        </a>
        <div className="banner">
            <img src={bannerImg} alt="banner"/>
            <div className="edit-icon"><HiPencil/></div>
            <div id="dp">
            <img src={dpImg} alt="DP"/>
            <div className="dp edit-icon">
              <HiPencil/>
            </div>  
        </div>
        </div>
        <div className="edit-wrap">
          <div className="new-name">
            <p>Name</p>
            <input id="user-name" type="text"/>
          </div>
          <div className="my-bio">
            <p>Bio</p>
            <textarea id="about"></textarea>
          </div>
          <Link to={`/profile-page`}>
            <button className="save">Save</button>
          </Link>
        </div>
    </div>
  )
}

export default EditProfile