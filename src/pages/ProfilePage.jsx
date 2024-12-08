import "../styles/profile.css"
import ProfileBio from "../components/ProfileBio";
import MyPosts from "../components/MyPosts";
import AddPost from "../components/AddPost";
import { FaArrowLeft } from "react-icons/fa6";


const ProfilePage = () => {
  return (
    <div className='profile-wrapper pages'>
        <a className="back"><FaArrowLeft /></a>
        <ProfileBio />
        <MyPosts />
        <AddPost />
    </div>
  )
}

export default ProfilePage