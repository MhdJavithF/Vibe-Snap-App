import "../styles/profile.css"
import ProfileBio from "../components/ProfileBio";
import MyPosts from "../components/MyPosts";
import AddPost from "../components/AddPost";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";


const ProfilePage = () => {
  const location = useLocation();

  const previousPage = location.state?.from || "/feed";
  return (
    <div className='profile-wrapper pages'>
        <Link to={previousPage}className="back" ><FaArrowLeft /></Link>
        <ProfileBio />
        <MyPosts />
        <AddPost />
    </div>
  )
}

export default ProfilePage