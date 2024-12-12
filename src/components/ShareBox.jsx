import {
  WhatsappShareButton,
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";
import { IoCloseCircle } from "react-icons/io5";
import { FaTwitter, FaFacebook, FaReddit, FaTelegram, FaWhatsapp, FaInstagram, FaDiscord, FaFacebookMessenger } from "react-icons/fa";
import { FaCopy } from "react-icons/fa6";
import "../styles/share.css";
import "../styles/global.css"

const ShareBox = ({ onClose }) => {
  const shareUrl = "https://example.com"; // Replace with your URL
  const shareTitle = "Check out this post!";

  return (
    <div className="share-wrapper">
      <div className="share-head">
        <p>Share Post</p>
        <div className="close">
          <IoCloseCircle className="close-icon" onClick={onClose} />
        </div>
      </div>

      <div className="share-icons">
        <div className="app-name">
          <div className="icon">
            <TwitterShareButton url={shareUrl} title={shareTitle}>
              <FaTwitter />
            </TwitterShareButton>
          </div>
          <div className="name">Twitter</div>
        </div>

        <div className="app-name">
          <div className="icon">
            <FacebookShareButton url={shareUrl} quote={shareTitle}>
              <FaFacebook />
            </FacebookShareButton>
          </div>
          <div className="name">Facebook</div>
        </div>

        <div className="app-name">
          <div className="icon">
            <RedditShareButton url={shareUrl} title={shareTitle}>
              <FaReddit />
            </RedditShareButton>
          </div>
          <div className="name">Reddit</div>
        </div>

        <div className="app-name">
          <div className="icon">
            <TelegramShareButton url={shareUrl} title={shareTitle}>
              <FaTelegram />
            </TelegramShareButton>
          </div>
          <div className="name">Telegram</div>
        </div>

        <div className="app-name">
          <div className="icon">
            <WhatsappShareButton url={shareUrl} subject={shareTitle}>
              <FaWhatsapp />
            </WhatsappShareButton>
          </div>
          <div className="name">WhatsApp</div>
        </div>

        {/* Placeholder Icons for Non-Supported Platforms */}
        <div className="app-name">
          <div className="icon">
            <FaDiscord />
          </div>
          <div className="name">Discord</div>
        </div>

        <div className="app-name">
          <div className="icon">
            <FaInstagram />
          </div>
          <div className="name">Instagram</div>
        </div>

        <div className="app-name">
          <div className="icon">
            <FaFacebookMessenger />
          </div>
          <div className="name">Messenger</div>
        </div>
      </div>

      <div className="footer">
        <p>Page Link</p>
        <div className="copy-pad">
          <input type="text" placeholder="copied link...!" disabled/>
          <FaCopy />
        </div>
      </div>
    </div>
  );
};

export default ShareBox;
