import {
  WhatsappShareButton,
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";
import { FaTwitter, FaFacebook, FaReddit, FaTelegram, FaWhatsapp, FaInstagram, FaDiscord, FaFacebookMessenger } from "react-icons/fa";
import "../styles/share.css"

const ShareBox = () => {
  const shareUrl = "https://example.com"; // Replace with your URL
  const shareTitle = "Check out this post!";

  return (
    <div className="share-wrapper">
      <div className="share-head">
        <p>Share Post</p>
        <div className="close">X</div>
      </div>

      <div className="share-icons">
        <div className="icon">
          <TwitterShareButton url={shareUrl} title={shareTitle}>
            <FaTwitter />
          </TwitterShareButton>
        </div>
        <div className="icon">
          <FacebookShareButton url={shareUrl} quote={shareTitle}>
            <FaFacebook />
          </FacebookShareButton>
        </div>
        <div className="icon">
          <RedditShareButton url={shareUrl} title={shareTitle}>
            <FaReddit />
          </RedditShareButton>
        </div>
        <div className="icon">
          <FaDiscord/>
        </div>
        <div className="icon">
          <WhatsappShareButton url={shareUrl} subject={shareTitle} body="Check this out!">
            <FaWhatsapp />
          </WhatsappShareButton>
        </div>
        <div className="icon">
          <FaFacebookMessenger/>
        </div>
        <div className="icon">
          <TelegramShareButton url={shareUrl} title={shareTitle}>
            <FaTelegram />
          </TelegramShareButton>
        </div>
        <div className="icon">
          <FaInstagram/>
        </div>
      </div>

      <div className="page-link">
        <p>Page Link</p>
        <div>copy</div>
      </div>
    </div>
  );
};

export default ShareBox;
