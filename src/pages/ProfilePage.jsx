import "../styles/profile.css"
import ProfileBio from "../components/ProfileBio";
import MyPosts from "../components/MyPosts";
import AddPost from "../components/AddPost";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";


const ProfilePage = () => {
  return (
    <div className='profile-wrapper pages'>
        <Link to={`/feed`} className="back"><FaArrowLeft /></Link>
        <ProfileBio />
        <MyPosts />
        <AddPost />
    </div>
  )
}

export default ProfilePage