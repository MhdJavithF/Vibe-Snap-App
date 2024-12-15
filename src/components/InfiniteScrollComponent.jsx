import React, { useState } from 'react';
import Data from '../assets/MOCK_DATA.json';
import UserDp from "../assets/images/feed/user1.png"
import PostImg1 from "../assets/images/feed/1post1.png"
import PostImg2 from "../assets/images/feed/1post2.png"
import { BiSolidNavigation } from "react-icons/bi";
import LikeButton from './LikeButton';
import InfiniteScroll from "react-infinite-scroll-component";
import '../styles/infinite.css'

const InfiniteScrollComponent = ({ share }) => {
  const [items, setItems] = useState(Data.slice(0, 10));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (items.length >= Data.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      const nextItems = Data.slice(items.length, items.length + 10);
      setItems((prevItems) => [...prevItems, ...nextItems]);
    }, 1000); 
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h5 style={{ textAlign: "center" }}>Loading...</h5>}
      height={700}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      className='infinite-wrap'
    >
        <div className="feed-rec">
                <div className="feed-head">
                    <div className="account">
                        <img src={UserDp} alt="user"/>
                    </div>
                    <div className="user">
                        <p id="user-name">Aarav</p>
                        <p id="time">2 hours ago</p>
                    </div>
                </div>
                <div className="content">
                    <p>
                    Just arrived in New York City! Excited to explore the sights, sounds, and energy of this amazing place. 🗽 <span>#NYC #Travel</span>
                    </p>
                </div>
                <div className="post">
                    <img src={PostImg1} alt="post"/>
                    <img src={PostImg2} alt="post"/>
                </div>
                <div className="actions">
                    <LikeButton initialLikes={40} />
                    <div className="share" onClick={share}>
                        <BiSolidNavigation />
                        <p>Share</p>
                    </div>
                </div>
            </div>

      {items.map((data, index) => (
        <div className="feed-rec" key={index}>
          <div className="feed-head">
            <div className="account">
              <img src={data.user_dp} alt="user" />
            </div>
            <div className="user">
              <p id="user-name">{data.user_name}</p>
              <p id="time">{data.time} hours ago</p>
            </div>
          </div>
          <div className="content">
            <p>
              {data.content} <span>{data.tags}</span>
            </p>
          </div>
          <div className="post">
            <img src={data.post_img} alt="post" />
          </div>
          <div className="actions">
            <LikeButton initialLikes={data.likes} />
            <div className="share" onClick={share}>
              <BiSolidNavigation />
              <p>Share</p>
            </div>
          </div>
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteScrollComponent;
