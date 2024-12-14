import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const LikeButton = ({ initialLikes }) => {
  const [isLiked, setIsLiked] = useState(false); 
  const [likesCount, setLikesCount] = useState(Number(initialLikes)); 

  const handleLikeToggle = () => {
    if (isLiked) {
      setLikesCount((prevCount) => prevCount - 1); 
    } else {
      setLikesCount((prevCount) => prevCount + 1); 
    }
    setIsLiked((prevState) => !prevState);
  };

  return (
    <div className="like" onClick={handleLikeToggle}>
      {isLiked ? <FaHeart color="red" /> : <FaRegHeart />}
      <span>{likesCount}</span>
    </div>
  );
};

export default LikeButton