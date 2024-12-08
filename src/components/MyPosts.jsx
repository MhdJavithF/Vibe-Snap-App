import designImg from "../assets/images/profile/design.png"
import parachuteImg from "../assets/images/profile/parachute.png"
import workImg from "../assets/images/profile/work.png"
import { HiHeart } from "react-icons/hi";

const MyPosts = () => {
  return (
    <div>
        <div className="post-wrapper">
            <p>My post</p>
            <div className="posts">
                <div className="post">
                    <img src={designImg} alt="design"/>
                    <div className="title">
                        <p>Design meet</p>
                    </div>
                    <div className="like liked">
                            <HiHeart/>
                            <span>510</span>
                    </div>
                </div>
                <div className="post">
                    <img src={workImg} alt="design"/>
                    <div className="title">
                        <p>Working on a B2B...</p>
                    </div>
                    <div className="like">
                            <HiHeart/>
                            <span>40</span>
                    </div>
                </div>
                <div className="post">
                    <img src={parachuteImg} alt="design"/>
                    <div className="title">
                        <p>Parachute ❤️</p>
                    </div>
                    <div className="like liked">
                            <HiHeart/>
                            <span>510</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyPosts